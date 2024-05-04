using Microsoft.EntityFrameworkCore;

namespace WebApplication33;

public class TodoDbContext : DbContext
{
    public TodoDbContext(DbContextOptions<TodoDbContext> options) : base(options)
    { 
    }

    public DbSet<Todo> Todos { get; set; }
}
