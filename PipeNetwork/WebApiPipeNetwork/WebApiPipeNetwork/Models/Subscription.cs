using System;
using System.Collections.Generic;

namespace WebApiPipeNetwork.Models;

public partial class Subscription
{
    public string ActivationCode { get; set; } = null!;

    public double Price { get; set; }

    public string Type { get; set; } = null!;

    public string NameSubscription { get; set; } = null!;

    public string Description { get; set; } = null!;

    public DateOnly StartDate { get; set; }

    public DateOnly? EndDate { get; set; }

    public int Software { get; set; }

    public int Company { get; set; }

    public int Id { get; set; }
}
