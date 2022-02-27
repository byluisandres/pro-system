<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['image','name', 'description', 'code', 'sales_price', 'stock', 'status', 'category_id'];

    // El usuario que hace el registro
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
