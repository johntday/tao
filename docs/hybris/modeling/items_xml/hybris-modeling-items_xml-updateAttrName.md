---
sidebar_position: 1
---

# Update Attribute Name

In a typical Hybris project during the development, 
we come across deleting/modifying attribute. 
When we modify the attribute name in `items.xml` and does a system update, 
Hybris will create a new column in database instead of updating the existing column. 
Below process will help us in modifying the attribute without any side effects. 
We are taking an example of modifying `attributeOld` to `attributeNew`.

**Step 0: Save data**

**Step 1: Modify items.xml file**

```xml
<itemtype code="MyTable">
    <attributes>
        <attribute qualifier="attributeNew">
            ...
        </attribute>
    </attributes>
</itemtype>
```

**Step 2: Write a remove old attribute descriptor impex**

```sql
REMOVE AttributeDescriptor; qualifier[unique = true]; enclosingType(code)[unique = true]
; attributeOld ; MyTable
```

**Step 3: Remove the column from SQL Database using a groovy script**

```groovy
import org.springframework.jdbc.core.JdbcTemplate
JdbcTemplate jdbcTemplate = spring.getBean("jdbcTemplate")
try {
    int rows = jdbcTemplate.update("ALTER TABLE mytable DROP COLUMN attributeold;")
} catch (Exception e) {
    println(String.format("'%s'", e.getMessage()))
}
```

**Step 4: Run ant clean all and start the server**

**Step 5: Run the removal impex (Step 2) and groovy script (Step 3)**

**Step 6: Perform a system update**

```sql
INSERT_UPDATE Mytable;code[unique=true];attributeOld
```
