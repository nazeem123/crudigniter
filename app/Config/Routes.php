<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

// Load the system's routing file first, so that the app and ENVIRONMENT
// can override as needed.
if (file_exists(SYSTEMPATH . 'Config/Routes.php'))
{
	require SYSTEMPATH . 'Config/Routes.php';
}

/**
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
$routes->setAutoRoute(true);
/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::index');
//create
$routes->post('/(:any)', 'Create::index/$1' ,['subdomain' => getenv('SUB_DOMAIN')]);
//read
$routes->get('/', function(){
	echo json_encode(array(
		"status"=>true,
		"message"=>"Read documentation here https://crudigniter.github.io"
	));
} ,['subdomain' => getenv('SUB_DOMAIN')]);
$routes->get('/(:any)', 'Read::index/$1' ,['subdomain' =>  getenv('SUB_DOMAIN')]);
//update
$routes->put('/(:any)', 'Update::index/$1' ,['subdomain' => getenv('SUB_DOMAIN')]);
$routes->patch('/(:any)', 'Update::index/$1' ,['subdomain' => getenv('SUB_DOMAIN')]);
//delete
$routes->delete('/(:any)', 'Delete::index/$1' ,['subdomain' => getenv('SUB_DOMAIN')]);

/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (file_exists(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php'))
{
	require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
