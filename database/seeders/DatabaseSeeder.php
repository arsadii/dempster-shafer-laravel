<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleSeeder::class);

        $user = User::create([
            'name' => 'Wahyuni',
            'username' => 'yuni',
            'email' => 'ywahyuni658@gmail.com',
            'password' => Hash::make('admin123')
        ]);

        $user->assignRole('admin');
    }
}
