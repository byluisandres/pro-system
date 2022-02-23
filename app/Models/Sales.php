<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    use HasFactory;
    protected $fillable = [
        "type_identification",
        "num_sales",
        'date_sales',
        'tax',
        "total",
        'status',
        'id_client',
        'id_user',
    ];
}
