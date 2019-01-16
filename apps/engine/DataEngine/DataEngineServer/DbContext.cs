using DataEngineServer.Entity;
using Microsoft.EntityFrameworkCore;

namespace DataEngineServer
{
    public class DataContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public DbSet<Package> Packages { get; set; }
        
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
    }
}