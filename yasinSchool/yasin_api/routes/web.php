<?php

$router->get('/', function () use ($router) {
    return $router->app->version();
});


// informasi route group
$router->group(['prefix' => 'api'], function () use ($router) {

$router->get('/informasi', ['uses' => 'InformasiC@getall']);
$router->get('/informasi/{id}', ['uses' => 'InformasiC@getbyid']);
$router->post('/informasi/add', ['uses' => 'InformasiC@save']);
$router->post('/informasi/update/{id}', ['uses' => 'InformasiC@update']);
$router->get('/informasi/delete/{id}', ['uses' => 'InformasiC@delete']);

$router->get('/admin', ['uses' => 'AdminC@getall']);
$router->get('/admin/{id}', ['uses' => 'AdminC@getbyid']);
$router->post('/admin/add', ['uses' => 'AdminC@save']);
$router->post('/admin/update/{id}', ['uses' => 'AdminC@update']);
$router->get('/admin/delete/{id}', ['uses' => 'AdminC@delete']);

$router->get('/users', ['uses' => 'UsersC@getall']);
$router->get('/users/{id}', ['uses' => 'UsersC@getbyid']);
$router->post('/users/add', ['uses' => 'UsersC@save']);
$router->post('/users/update/{id}', ['uses' => 'UsersC@update']);
$router->get('/users/delete/{id}', ['uses' => 'UsersC@delete']);

$router->get('/token', ['uses' => 'AuthC@get_token']);
$router->post('/login', ['middleware'=>'auth', 'uses' => 'AuthC@login']);

});
