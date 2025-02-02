using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Enum;

namespace Core.Models
{
    public class OrderModel
    {
        public int? Id { get; set; }
        public int CustomerId { get; set; }
        public DateTime OrderDate { get; set; }
        public string Description { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal DepositAmount { get; set; }

        public bool IsDelivery { get; set; }
        public Status Status { get; set; }
        public string OtherNotes { get; set; }

    }
}