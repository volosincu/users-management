# users.management.js
User management application written in Javascript (Backbonejs, underscore, jquery, coffeePubSub, bootstrap) with persistence layer in Google Firebase Database



DEMO : https://user-management-3ecf9.firebaseapp.com



The database can be interogated directly at this enpoints :


    $curl 'https://user-management-3ecf9.firebaseio.com/users.json' | jq
    $curl 'https://user-management-3ecf9.firebaseio.com/users/878431478495695.json' | jq

    $curl 'https://user-management-3ecf9.firebaseio.com/groups.json' | jq
    $curl 'https://user-management-3ecf9.firebaseio.com/groups/<groupid>.json' | jq


    * 878431478495695 = user id
    * jq - command-line JSON processor (https://stedolan.github.io/jq/)


NOTE: the application may loading more faster or slower depending on the hosting.

