/**
 * Created by artem on 11/11/15.
 */
define([], function () {
    var dataSource = {};
    dataSource.getContainers = function () {
        return [
            {
                "Id": "8dfafdbc3a40",
                "Names": ["/boring_feynman"],
                "Image": "ubuntu:latest",
                "ImageID": "d74508fb6632491cea586a1fd7d748dfc5274cd6fdfedee309ecdcbc2bf5cb82",
                "Command": "echo 1",
                "Created": 1367854155,
                "Status": "Exit 0",
                "Ports": [{"PrivatePort": 2222, "PublicPort": 3333, "Type": "tcp"}],
                "Labels": {
                    "com.example.vendor": "Acme",
                    "com.example.license": "GPL",
                    "com.example.version": "1.0"
                },
                "SizeRw": 12288,
                "SizeRootFs": 0
            },
            {
                "Id": "9cd87474be90",
                "Names": ["/coolName"],
                "Image": "ubuntu:latest",
                "ImageID": "d74508fb6632491cea586a1fd7d748dfc5274cd6fdfedee309ecdcbc2bf5cb82",
                "Command": "echo 222222",
                "Created": 1367854155,
                "Status": "Exit 0",
                "Ports": [],
                "Labels": {},
                "SizeRw": 12288,
                "SizeRootFs": 0
            },
            {
                "Id": "3176a2479c92",
                "Names": ["/sleepy_dog"],
                "Image": "ubuntu:latest",
                "ImageID": "d74508fb6632491cea586a1fd7d748dfc5274cd6fdfedee309ecdcbc2bf5cb82",
                "Command": "echo 3333333333333333",
                "Created": 1367854154,
                "Status": "Exit 0",
                "Ports": [],
                "Labels": {},
                "SizeRw": 12288,
                "SizeRootFs": 0
            },
            {
                "Id": "4cb07b47f9fb",
                "Names": ["/running_cat"],
                "Image": "ubuntu:latest",
                "ImageID": "d74508fb6632491cea586a1fd7d748dfc5274cd6fdfedee309ecdcbc2bf5cb82",
                "Command": "echo 444444444444444444444444444444444",
                "Created": 1367854152,
                "Status": "Exit 0",
                "Ports": [],
                "Labels": {},
                "SizeRw": 12288,
                "SizeRootFs": 0
            }
        ]
    }
    return dataSource;
});