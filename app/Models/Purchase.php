<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;
    protected $fillable = ['type_identification', 'num_purchase', 'date_purchase', 'tax', 'total', 'status', 'id_supplier', 'id_user'];

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
