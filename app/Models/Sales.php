<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    use HasFactory;
    protected $fillable = [
        "num_sales",
        'date_sales',
        "total",
        'status',
        'client_id',
        'user_id',
    ];
    // El usuario que hace el registro
    public function user()
    {
        return $this->belongsTo(User::class);
    }


    // El provedor que hace la compra
    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
