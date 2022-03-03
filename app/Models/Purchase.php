<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;
    protected $fillable = ['num_purchase', 'date_purchase', 'total', 'status', 'supplier_id', 'user_id'];

    // El usuario que hace el registro
    public function user()
    {
        return $this->belongsTo(User::class);
    }


    // El provedor que hace la compra
    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
}
