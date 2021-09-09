---
sidebar_position: 1
---

# Approach for Not Returning Null
Standard approaches for not returning null.

## Return an Empty Collection
If the method returns a collection type, then we can simply substitute an empty collection.

### Java 5+
The Collections class has a static method for this purpose:

```java
return Collections.emptyList();
```

### Java 9
Java 9 introduced a new factory method for this:

```java
return List.of();
```

Both of these return an immutable list so the calling code should make no attempt to modify it.

### Return an Optional object
Java 8 introduced a class called `java.util.Optional`.  An `Optional` is a container that can either be empty or contain a non-null value.

`Optional` **IS NOT MEANT** to take the place of returning null. It is meant to indicate a third return result. The three possible results are:
1. value is non-null
2. value is null
3. case where null value is ambiguous.  This is where `Optional` should be used

Adding `Optional` everywhere you return anything is an anti-pattern, and just replaces all of those null checks/guards with `isPresent` checks/guards. Doesn't fix the problem, just moves it.

### Return a Null Object
The Null Object Pattern is described in the [Gang of Four’s Design Patterns book](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/).  
The intent of the pattern is to identify behavior that should occur when a null is encountered and encapsulate it using a static constant.

Let's expand on the previous Blog class example:

```java
public class Blog {
  public static Blog NOT_FOUND = new Blog(0, "Blog Not Found", Collections.emptyList());
  
  private long id;
  private String name;
  private List<Article> articles;
 
  public Blog (long id, String name, List<Article> articles) {
    this.id = id;
    this.name = name;
    this.articles = articles;
  }
  
  public long getId() {
    return id;
  }
 
  public List<Article> getArticles() {
    return articles;
  }
}
```

On line 2, we've declared a constant to represent our null object.   It's a Blog object with some sensible values for a non-existent blog.
Any methods that return a Blog type can now use `Blog.NOT_FOUND` instead of null.

### Throw an Exception
Exceptions should be reserved for exceptional conditions.    If we always expect to find a value then throwing an exception makes sense.
For example, we could throw an unchecked exception if an ID passed to our method isn't found in the database.

```java
throw new IllegalArgumentException("Invalid Blog ID");
```

The decision to use an exception when there is nothing to return is highly dependent on the nature of the application.
