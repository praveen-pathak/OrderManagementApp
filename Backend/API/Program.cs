using API.GraphQL;
using Core.Interfaces;
using GraphQL.Server.Ui.Voyager;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

var AllowSpecificOrigins = "_allowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContextFactory<OMAContext>(options =>
{
  options.UseSqlServer("Server=DEV-02;Database=omaDb;Trusted_Connection=True;TrustServerCertificate=True;");
});
builder.Services.AddScoped<ICustomerService, CustomerService>();
builder.Services.AddScoped<IOrderService, OrderService>();

//graphql
builder.Services
.AddGraphQLServer()
.AddQueryType<Query>()
.AddFiltering();

//cors
builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowSpecificOrigins", policy =>
  {
    policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
  });
});


var app = builder.Build();

app.UseCors(AllowSpecificOrigins);
app.MapGraphQL();
app.UseGraphQLVoyager("/graphql-voyager", new VoyagerOptions { GraphQLEndPoint = "/graphql" });

// Migrate DataBase
try
{
  var scope = app.Services.CreateScope();
  var context = scope.ServiceProvider.GetRequiredService<OMAContext>();
  context.Database.Migrate();
}
catch (Exception ex)
{
  var logger = app.Services.GetRequiredService<ILogger<Program>>();
  logger.LogError(ex, "An error occured during migration");
}

app.Run();
