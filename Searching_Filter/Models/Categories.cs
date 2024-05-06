using System.ComponentModel.DataAnnotations;

namespace Searching_Filter.Models
{
    public class Categories
    {
        [Key]
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
    }
}
