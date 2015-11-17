/**
 * Created by artem on 11/16/15.
 */
define(['../module'], function (module) {
    module.factory('DockerWebUI.Common.BackendErrors',
        [
            function () {
                var service = {};
                var errors = {
                    BLOB_UNKNOWN: {
                        message: 'blob unknown to registry',
                        description: 'This error may be returned when a blob is unknown to the registry ' +
                        'in a specified repository. This can be returned with a standard get or ' +
                        'if a manifest references an unknown layer during upload.'
                    },
                    BLOB_UPLOAD_INVALID: {
                        message: 'blob upload invalid',
                        description: 'The blob upload encountered an error and can no longer proceed.'
                    },
                    BLOB_UPLOAD_UNKNOWN: {
                        message: 'blob upload unknown to registry',
                        description: 'If a blob upload has been cancelled or was never started, this error code may be returned.'
                    },
                    DIGEST_INVALID: {
                        message: 'provided digest did not match uploaded content',
                        description: 'When a blob is uploaded, the registry will check that the content matches the digest ' +
                        'provided by the client. The error may include a detail structure with the key "digest", ' +
                        'including the invalid digest string. This error may also be returned when a manifest includes ' +
                        'an invalid layer digest.'
                    },
                    MANIFEST_BLOB_UNKNOWN: {
                        message: 'blob unknown to registry',
                        description: 'This error may be returned when a manifest blob is unknown to the registry.'
                    },
                    MANIFEST_INVALID: {
                        message: 'manifest invalid',
                        description: 'During upload, manifests undergo several checks ensuring validity. If those checks fail, ' +
                        'this error may be returned, unless a more specific error is included. ' +
                        'The detail will contain information the failed validation.'
                    },
                    MANIFEST_UNKNOWN: {
                        message: 'manifest unknown',
                        description: 'This error is returned when the manifest, identified by name and tag is unknown to the repository.'
                    },
                    MANIFEST_UNVERIFIED: {
                        message: 'manifest failed signature verification',
                        description: 'During manifest upload, if the manifest fails signature verification, this error will be returned.'
                    },
                    NAME_INVALID: {
                        message: 'invalid repository name',
                        description: 'Invalid repository name encountered either during manifest validation or any API operation.'
                    },
                    NAME_UNKNOWN: {
                        message: 'repository name not known to registry',
                        description: 'This is returned if the name used during an operation is unknown to the registry.'
                    },
                    SIZE_INVALID: {
                        message: 'provided length did not match content length',
                        description: 'When a layer is uploaded, the provided size will be checked against the uploaded content. ' +
                        'If they do not match, this error will be returned.'
                    },
                    TAG_INVALID: {
                        message: 'manifest tag did not match URI',
                        description: 'During a manifest upload, if the tag in the manifest does not match the uri tag, this error will be returned.'
                    },
                    UNAUTHORIZED: {
                        message: 'authentication required',
                        description: 'The access controller was unable to authenticate the client. ' +
                        'Often this will be accompanied by a Www-Authenticate HTTP response header indicating how to authenticate.'
                    },
                    DENIED: {
                        message: 'requested access to the resource is denied',
                        description: 'The access controller denied access for the operation on a resource.'
                    },
                    UNSUPPORTED: {
                        message: 'The operation is unsupported.',
                        description: 'The operation was unsupported due to a missing implementation or invalid set of parameters.'
                    }
                };
                service.getErrorById = function (id) {
                    if (errors.hasOwnProperty(id)) {
                        return errors[id];
                    }
                    throw new Error('Api error list has no info about error id: ' + id);
                };
                return service;
            }
        ]);
});