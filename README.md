# Simple CRUD Single page application(SPA) with Laravel Inertia ReactJS andTailwindcss
Simple CRUD Single-page application with Laravel, Inertia, ReactJS, and Tailwindcss. Auth is provided by laravel/breeze.

## Preview
![preview large](https://lh3.googleusercontent.com/B_c98GhFYQEKGLVRTSes6uoN2oBWj2d2Q5NsjZDsrQOV4Cu0FlJ5wTD5q90LlynbRNW5kpR6tpLpkLuJkrf-etjAelxHLVd17N3C7PextccXXSz-97TcqjXRyozqJ0Pw5EBhZkJUlDQpeDdyHoq_zV1RX09OErRKGn9p4xh1V03wu8ecj4FNx5FqWr2PzHiXHeWG4_APUaucbBaV3b5reAkV2CgU6UN9bPRm5-wBytvCKwHPGPCYNd41s9WimonqEi7Fx6RbvzZi4-U6xz7KdwCm6ynhv9iM9VhBxF1QRLz2UfUGukSPEaqSxamKN2e68edOXgNnECw41RKbc-W1FTfCbmxER2grwBFfyISPiJQ8Y8FRudsHROlDbX5MkJfh9ECnTrm5owy8tbM5nKXhjZthJG-6mhoaaw-wK_UuJTenGDYjrTcOFseffzLmfh0GOvNMhUzAj0iylbfPorswLzpDmRpY1r3elDz4YjUkbWn3dtOH4A_u9A3S2o_0rI1S62SCMzsYXcYXhst5WySSi7rxKIDfr7vmtxeRyAQnNWN8Rm3rwcbtksThjz6nvdS53vCT2o5ZK7Km3lQfreGPwIHDLG_n2n42Pru-K7713RrlnmseREelsUgKutBytPudzg5pcALqYaVnKfmem-3RSTFkAYD_mJaZzPz1yVKHKstHz65avNwsc1g221ruRQWCpNvsx9mUDoCN6yQUCobrANbU29erGBRZcae5cICvG-07AtUrBVIu6bympB3008ngu5BKO-Sbd4u1m0n1UgS5FsUGhnIXwR9LMTTh=w1335-h661-no "Preview large")  

![preview small](https://lh3.googleusercontent.com/01TA5-M_BtspnAKV8Nv57qo4fcN1QtDr-scmQa9uwV470jkjuBIuFnAXf9gvsKydqMa1JBYP9u8HMXU9lFnQBUNOfD9bhVS9sQhCBCzM71TD6J9_ICqmPxiVRtejo-0K8yoWQ-sGLqIj7bXCdjIIj3mb6NynE5kE1CloiXsWG5xD38JOiAYepWH_xhYoXrlzdpgM8rkUrIq8Pk_sLGqkAgWnzyORMeI8M4EB1J0vuBFwupW07mT9QxosXhEIdTwy1Bw4ox00A9371v51Qbm_jgWOtD3OQ8snSDV7UX-p1OHNHJdX9K4djN_M66EK_uSw5LzT-vYPnX7qUeZviL31kufkzERRMqPe0A5hxhFGvLj93Esx0bJNNJtVlkTfcaE2y-M0XjFdtslIvKcqFyA-IGDrSvLPRMEfNC2NuJdppetsu8zvhsf8nXqWEu2yL6sq5chpTizoq8zrWFXXvgdiYfqRLeRvXNVDX9WIK69VyltPYfg3KV1c0jtwzWsc4zp7VO2LHQi12lqlxmNi80Cs9-QdfKtOwtxGtMZGEaUDvComAiR-x_0yVc67Mp58F-LgNOiI9qYY5DY9IEARym5fVP7y4G-BAcjJImBMTGfH044qFl7ZbV-Q4moPUUZzaU-vjSaXwgx1i7z1EClsgu5fRnxJdPJekA28YUpF6J2pJ-GJrWHa7jXovgRYn3QG4vL5pHul6L49mUCWDHLEu_n96Mb8iAD-Rx7kEzr2YudwVmIokXIVx9aU3dwsTZNZ7tdcsIqRLnAWoUmEM6BGdEzfPJw_M1xEyodYhnM1=w477-h647-no "Preview small")

### [Demo](http://laravel-inertia-react-crud.herokuapp.com)

## Installation  
Make sure you have `git`, `php` *(my version is PHP 8.1.2)*, [`composer`](https://getcomposer.org/) and `node` installed

Clone  
```
git clone https://github.com/sprngLf/laravel-crud-spa.git
```
Go to directory  
```
cd laravel-crud-spa
```
Make `.env` file  
```
cp .env.example .env
```
Configure database  
```
DB_DATABASE=test_db  
DB_USERNAME=db_user  
DB_PASSWORD=db_pass
```
Install php dependencies  
```
composer install
```
Install node dependencies  
```
npm install or yarn install
```
Run migrations  
```
php artisan migrate
```
Create fake data  
```
php artisan tinker
App\Models\User::factory(1)->create();
App\Models\Contact::factory(200)->create();
exit();
```
Generate key  
```
php artisan key:generate
```
Run server  
```
php artisan serve
```
Open [http://localhost:8000](http://localhost:8000)  

## LICENSE  
Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT)
