<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //
    public function guardians() {
        return $this->belongsTo(App\Guardian::class);
    }
}
