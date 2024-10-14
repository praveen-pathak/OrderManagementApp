using Core.Entities;
using Core.Enum;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class OMAContext : DbContext
    {

        public DbSet<Customer> Customers { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Address> Addresses { get; set; }

        public OMAContext(DbContextOptions<OMAContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().HasData(
             new Customer
             {
                 Id = 1,
                 FirstName = "James",
                 LastName = "Bond",
                 ContactNumber = "041235456",
                 IsDeleted = false,
                 Email = "jambond@hermajesty.com"
             },
             new Customer
             {
                 Id = 1,
                 FirstName = "Monty",
                 LastName = "Python",
                 ContactNumber = "1235456789",
                 IsDeleted = false,
                 Email = "monty@hermajesty.com"
             }
            );

            modelBuilder.Entity<Address>().HasData(
            new Address
            {
                Id = 1,
                CustomerId = 1,
                AddressLine1 = "SomePlace",
                AddressLine2 = "There",
                City = "Melbourne",
                State = "Victoria",
                Country = "AU"
            },
             new Address
             {
                 Id = 2,
                 CustomerId = 2,
                 AddressLine1 = "Another Place",
                 AddressLine2 = "Here",
                 City = "Melbourne",
                 State = "Victoria",
                 Country = "AU"
             }
            );

            modelBuilder.Entity<Order>().HasData(
            new Order
            {
                Id = 1,
                CustomerId = 1,
                OrderDate = new DateTime(2024, 10, 03),
                Description = "New Item",
                TotalAmount = 500,
                DepositAmount = 10,
                IsDelivery = true,
                Status = Status.PANDING,
                OtherNotes = "Something new",
                IsDeleted = false
            },
            new Order
            {
                Id = 2,
                CustomerId = 2,
                OrderDate = new DateTime(2024, 11, 03),
                Description = "Another New Item",
                TotalAmount = 5000,
                DepositAmount = 250,
                IsDelivery = true,
                Status = Status.DRAFT,
                OtherNotes = "Something new again",
                IsDeleted = false
            }
            );
        }
    }
}