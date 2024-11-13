namespace User_Mng_BE
{
    using Microsoft.EntityFrameworkCore;
    using User_Mng_BE.Models;


    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<AppUser> Users { get; set; }
    }

}
