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
    };
    dataSource.getImages = function () {
        return [
            {
                "RepoTags": [
                    "ubuntu:12.04",
                    "ubuntu:precise",
                    "ubuntu:latest"
                ],
                "Id": "8dbd9e392a964056420e5d58ca5cc376ef18e2de93b5cc90e868a1bbc8318c1c",
                "Created": 1365714795,
                "Size": 131506275,
                "VirtualSize": 131506275,
                "Labels": {}
            },
            {
                "RepoTags": [
                    "ubuntu:12.10",
                    "ubuntu:quantal"
                ],
                "ParentId": "27cf784147099545",
                "Id": "b750fe79269d2ec9a3c593ef05b4332b1d1a02a62b4accb2c21d589ff2f5f2dc",
                "Created": 1364102658,
                "Size": 24653,
                "VirtualSize": 180116135,
                "Labels": {
                    "com.example.version": "v1"
                }
            }
        ];
    };
    dataSource.getVolumes = function () {
        return {
            "Volumes": [
                {
                    "Name": "tardis",
                    "Driver": "local",
                    "Mountpoint": "/var/lib/docker/volumes/tardis"
                }
            ]
        };
    };
    return dataSource;
});