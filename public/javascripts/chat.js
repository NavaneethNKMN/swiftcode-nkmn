var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {
    $scope.messages=[
    {
        'sender':'USER',
        'text':'hi',
        'time':'10:01AM'
    },
    {
            'sender':'BOT',
            'text':'what can i do for you',
            'time':'10:01AM'
    },
    {
            'sender':'USER',
            'text':'News about Modi',
            'time':'10:01AM'
    },
    {
            'sender':'BOT',
            'text':'INVALID',
            'time':'10:02AM'
    }
    ]
});
