

// const protobuf = require("./light/protobuf");

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.CLGT = (function() {

    /**
     * Namespace CLGT.
     * @exports CLGT
     * @namespace
     */
    var CLGT = {};

    CLGT.HandReq = (function() {

        /**
         * Properties of a HandReq.
         * @memberof CLGT
         * @interface IHandReq
         * @property {number|null} [platform] HandReq platform
         * @property {number|null} [product] HandReq product
         * @property {number|null} [version] HandReq version
         * @property {string|null} [device] HandReq device
         * @property {number|null} [channel] HandReq channel
         * @property {string|null} [country] HandReq country
         * @property {string|null} [language] HandReq language
         */

        /**
         * Constructs a new HandReq.
         * @memberof CLGT
         * @classdesc Represents a HandReq.
         * @implements IHandReq
         * @constructor
         * @param {CLGT.IHandReq=} [properties] Properties to set
         */
        function HandReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandReq platform.
         * @member {number} platform
         * @memberof CLGT.HandReq
         * @instance
         */
        HandReq.prototype.platform = 0;

        /**
         * HandReq product.
         * @member {number} product
         * @memberof CLGT.HandReq
         * @instance
         */
        HandReq.prototype.product = 0;

        /**
         * HandReq version.
         * @member {number} version
         * @memberof CLGT.HandReq
         * @instance
         */
        HandReq.prototype.version = 0;

        /**
         * HandReq device.
         * @member {string} device
         * @memberof CLGT.HandReq
         * @instance
         */
        HandReq.prototype.device = "";

        /**
         * HandReq channel.
         * @member {number} channel
         * @memberof CLGT.HandReq
         * @instance
         */
        HandReq.prototype.channel = 0;

        /**
         * HandReq country.
         * @member {string} country
         * @memberof CLGT.HandReq
         * @instance
         */
        HandReq.prototype.country = "";

        /**
         * HandReq language.
         * @member {string} language
         * @memberof CLGT.HandReq
         * @instance
         */
        HandReq.prototype.language = "";

        /**
         * Creates a new HandReq instance using the specified properties.
         * @function create
         * @memberof CLGT.HandReq
         * @static
         * @param {CLGT.IHandReq=} [properties] Properties to set
         * @returns {CLGT.HandReq} HandReq instance
         */
        HandReq.create = function create(properties) {
            return new HandReq(properties);
        };

        /**
         * Encodes the specified HandReq message. Does not implicitly {@link CLGT.HandReq.verify|verify} messages.
         * @function encode
         * @memberof CLGT.HandReq
         * @static
         * @param {CLGT.IHandReq} message HandReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.platform);
            if (message.product != null && Object.hasOwnProperty.call(message, "product"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.product);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.version);
            if (message.device != null && Object.hasOwnProperty.call(message, "device"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.device);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.channel);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.country);
            if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.language);
            return writer;
        };

        /**
         * Encodes the specified HandReq message, length delimited. Does not implicitly {@link CLGT.HandReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.HandReq
         * @static
         * @param {CLGT.IHandReq} message HandReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandReq message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.HandReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.HandReq} HandReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.HandReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.platform = reader.int32();
                    break;
                case 2:
                    message.product = reader.int32();
                    break;
                case 3:
                    message.version = reader.int32();
                    break;
                case 4:
                    message.device = reader.string();
                    break;
                case 5:
                    message.channel = reader.int32();
                    break;
                case 6:
                    message.country = reader.string();
                    break;
                case 7:
                    message.language = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HandReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.HandReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.HandReq} HandReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandReq message.
         * @function verify
         * @memberof CLGT.HandReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                if (!$util.isInteger(message.platform))
                    return "platform: integer expected";
            if (message.product != null && message.hasOwnProperty("product"))
                if (!$util.isInteger(message.product))
                    return "product: integer expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.device != null && message.hasOwnProperty("device"))
                if (!$util.isString(message.device))
                    return "device: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isString(message.country))
                    return "country: string expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            return null;
        };

        /**
         * Creates a HandReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.HandReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.HandReq} HandReq
         */
        HandReq.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.HandReq)
                return object;
            var message = new $root.CLGT.HandReq();
            if (object.platform != null)
                message.platform = object.platform | 0;
            if (object.product != null)
                message.product = object.product | 0;
            if (object.version != null)
                message.version = object.version | 0;
            if (object.device != null)
                message.device = String(object.device);
            if (object.channel != null)
                message.channel = object.channel | 0;
            if (object.country != null)
                message.country = String(object.country);
            if (object.language != null)
                message.language = String(object.language);
            return message;
        };

        /**
         * Creates a plain object from a HandReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.HandReq
         * @static
         * @param {CLGT.HandReq} message HandReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.platform = 0;
                object.product = 0;
                object.version = 0;
                object.device = "";
                object.channel = 0;
                object.country = "";
                object.language = "";
            }
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            if (message.product != null && message.hasOwnProperty("product"))
                object.product = message.product;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.device != null && message.hasOwnProperty("device"))
                object.device = message.device;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            return object;
        };

        /**
         * Converts this HandReq to JSON.
         * @function toJSON
         * @memberof CLGT.HandReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HandReq;
    })();

    CLGT.HandAck = (function() {

        /**
         * Properties of a HandAck.
         * @memberof CLGT
         * @interface IHandAck
         * @property {number|null} [errcode] HandAck errcode
         * @property {number|null} [payload] HandAck payload
         * @property {Uint8Array|null} [randomKey] HandAck randomKey
         * @property {Array.<number>|null} [randomKeyArr] HandAck randomKeyArr
         * @property {string|null} [sessionGuid] HandAck sessionGuid
         */

        /**
         * Constructs a new HandAck.
         * @memberof CLGT
         * @classdesc Represents a HandAck.
         * @implements IHandAck
         * @constructor
         * @param {CLGT.IHandAck=} [properties] Properties to set
         */
        function HandAck(properties) {
            this.randomKeyArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandAck errcode.
         * @member {number} errcode
         * @memberof CLGT.HandAck
         * @instance
         */
        HandAck.prototype.errcode = 0;

        /**
         * HandAck payload.
         * @member {number} payload
         * @memberof CLGT.HandAck
         * @instance
         */
        HandAck.prototype.payload = 0;

        /**
         * HandAck randomKey.
         * @member {Uint8Array} randomKey
         * @memberof CLGT.HandAck
         * @instance
         */
        HandAck.prototype.randomKey = $util.newBuffer([]);

        /**
         * HandAck randomKeyArr.
         * @member {Array.<number>} randomKeyArr
         * @memberof CLGT.HandAck
         * @instance
         */
        HandAck.prototype.randomKeyArr = $util.emptyArray;

        /**
         * HandAck sessionGuid.
         * @member {string} sessionGuid
         * @memberof CLGT.HandAck
         * @instance
         */
        HandAck.prototype.sessionGuid = "";

        /**
         * Creates a new HandAck instance using the specified properties.
         * @function create
         * @memberof CLGT.HandAck
         * @static
         * @param {CLGT.IHandAck=} [properties] Properties to set
         * @returns {CLGT.HandAck} HandAck instance
         */
        HandAck.create = function create(properties) {
            return new HandAck(properties);
        };

        /**
         * Encodes the specified HandAck message. Does not implicitly {@link CLGT.HandAck.verify|verify} messages.
         * @function encode
         * @memberof CLGT.HandAck
         * @static
         * @param {CLGT.IHandAck} message HandAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && Object.hasOwnProperty.call(message, "errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.payload);
            if (message.randomKey != null && Object.hasOwnProperty.call(message, "randomKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.randomKey);
            if (message.randomKeyArr != null && message.randomKeyArr.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.randomKeyArr.length; ++i)
                    writer.int32(message.randomKeyArr[i]);
                writer.ldelim();
            }
            if (message.sessionGuid != null && Object.hasOwnProperty.call(message, "sessionGuid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sessionGuid);
            return writer;
        };

        /**
         * Encodes the specified HandAck message, length delimited. Does not implicitly {@link CLGT.HandAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.HandAck
         * @static
         * @param {CLGT.IHandAck} message HandAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandAck message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.HandAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.HandAck} HandAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.HandAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                case 2:
                    message.payload = reader.int32();
                    break;
                case 3:
                    message.randomKey = reader.bytes();
                    break;
                case 4:
                    if (!(message.randomKeyArr && message.randomKeyArr.length))
                        message.randomKeyArr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.randomKeyArr.push(reader.int32());
                    } else
                        message.randomKeyArr.push(reader.int32());
                    break;
                case 5:
                    message.sessionGuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HandAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.HandAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.HandAck} HandAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandAck message.
         * @function verify
         * @memberof CLGT.HandAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isInteger(message.errcode))
                    return "errcode: integer expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!$util.isInteger(message.payload))
                    return "payload: integer expected";
            if (message.randomKey != null && message.hasOwnProperty("randomKey"))
                if (!(message.randomKey && typeof message.randomKey.length === "number" || $util.isString(message.randomKey)))
                    return "randomKey: buffer expected";
            if (message.randomKeyArr != null && message.hasOwnProperty("randomKeyArr")) {
                if (!Array.isArray(message.randomKeyArr))
                    return "randomKeyArr: array expected";
                for (var i = 0; i < message.randomKeyArr.length; ++i)
                    if (!$util.isInteger(message.randomKeyArr[i]))
                        return "randomKeyArr: integer[] expected";
            }
            if (message.sessionGuid != null && message.hasOwnProperty("sessionGuid"))
                if (!$util.isString(message.sessionGuid))
                    return "sessionGuid: string expected";
            return null;
        };

        /**
         * Creates a HandAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.HandAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.HandAck} HandAck
         */
        HandAck.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.HandAck)
                return object;
            var message = new $root.CLGT.HandAck();
            if (object.errcode != null)
                message.errcode = object.errcode | 0;
            if (object.payload != null)
                message.payload = object.payload | 0;
            if (object.randomKey != null)
                if (typeof object.randomKey === "string")
                    $util.base64.decode(object.randomKey, message.randomKey = $util.newBuffer($util.base64.length(object.randomKey)), 0);
                else if (object.randomKey.length)
                    message.randomKey = object.randomKey;
            if (object.randomKeyArr) {
                if (!Array.isArray(object.randomKeyArr))
                    throw TypeError(".CLGT.HandAck.randomKeyArr: array expected");
                message.randomKeyArr = [];
                for (var i = 0; i < object.randomKeyArr.length; ++i)
                    message.randomKeyArr[i] = object.randomKeyArr[i] | 0;
            }
            if (object.sessionGuid != null)
                message.sessionGuid = String(object.sessionGuid);
            return message;
        };

        /**
         * Creates a plain object from a HandAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.HandAck
         * @static
         * @param {CLGT.HandAck} message HandAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.randomKeyArr = [];
            if (options.defaults) {
                object.errcode = 0;
                object.payload = 0;
                if (options.bytes === String)
                    object.randomKey = "";
                else {
                    object.randomKey = [];
                    if (options.bytes !== Array)
                        object.randomKey = $util.newBuffer(object.randomKey);
                }
                object.sessionGuid = "";
            }
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                object.errcode = message.errcode;
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = message.payload;
            if (message.randomKey != null && message.hasOwnProperty("randomKey"))
                object.randomKey = options.bytes === String ? $util.base64.encode(message.randomKey, 0, message.randomKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.randomKey) : message.randomKey;
            if (message.randomKeyArr && message.randomKeyArr.length) {
                object.randomKeyArr = [];
                for (var j = 0; j < message.randomKeyArr.length; ++j)
                    object.randomKeyArr[j] = message.randomKeyArr[j];
            }
            if (message.sessionGuid != null && message.hasOwnProperty("sessionGuid"))
                object.sessionGuid = message.sessionGuid;
            return object;
        };

        /**
         * Converts this HandAck to JSON.
         * @function toJSON
         * @memberof CLGT.HandAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HandAck;
    })();

    CLGT.DisconnectNtf = (function() {

        /**
         * Properties of a DisconnectNtf.
         * @memberof CLGT
         * @interface IDisconnectNtf
         * @property {number|null} [code] DisconnectNtf code
         * @property {string|null} [errmessage] DisconnectNtf errmessage
         */

        /**
         * Constructs a new DisconnectNtf.
         * @memberof CLGT
         * @classdesc Represents a DisconnectNtf.
         * @implements IDisconnectNtf
         * @constructor
         * @param {CLGT.IDisconnectNtf=} [properties] Properties to set
         */
        function DisconnectNtf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DisconnectNtf code.
         * @member {number} code
         * @memberof CLGT.DisconnectNtf
         * @instance
         */
        DisconnectNtf.prototype.code = 0;

        /**
         * DisconnectNtf errmessage.
         * @member {string} errmessage
         * @memberof CLGT.DisconnectNtf
         * @instance
         */
        DisconnectNtf.prototype.errmessage = "";

        /**
         * Creates a new DisconnectNtf instance using the specified properties.
         * @function create
         * @memberof CLGT.DisconnectNtf
         * @static
         * @param {CLGT.IDisconnectNtf=} [properties] Properties to set
         * @returns {CLGT.DisconnectNtf} DisconnectNtf instance
         */
        DisconnectNtf.create = function create(properties) {
            return new DisconnectNtf(properties);
        };

        /**
         * Encodes the specified DisconnectNtf message. Does not implicitly {@link CLGT.DisconnectNtf.verify|verify} messages.
         * @function encode
         * @memberof CLGT.DisconnectNtf
         * @static
         * @param {CLGT.IDisconnectNtf} message DisconnectNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisconnectNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.errmessage != null && Object.hasOwnProperty.call(message, "errmessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errmessage);
            return writer;
        };

        /**
         * Encodes the specified DisconnectNtf message, length delimited. Does not implicitly {@link CLGT.DisconnectNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.DisconnectNtf
         * @static
         * @param {CLGT.IDisconnectNtf} message DisconnectNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisconnectNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisconnectNtf message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.DisconnectNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.DisconnectNtf} DisconnectNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisconnectNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.DisconnectNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.errmessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DisconnectNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.DisconnectNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.DisconnectNtf} DisconnectNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisconnectNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DisconnectNtf message.
         * @function verify
         * @memberof CLGT.DisconnectNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DisconnectNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.errmessage != null && message.hasOwnProperty("errmessage"))
                if (!$util.isString(message.errmessage))
                    return "errmessage: string expected";
            return null;
        };

        /**
         * Creates a DisconnectNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.DisconnectNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.DisconnectNtf} DisconnectNtf
         */
        DisconnectNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.DisconnectNtf)
                return object;
            var message = new $root.CLGT.DisconnectNtf();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.errmessage != null)
                message.errmessage = String(object.errmessage);
            return message;
        };

        /**
         * Creates a plain object from a DisconnectNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.DisconnectNtf
         * @static
         * @param {CLGT.DisconnectNtf} message DisconnectNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DisconnectNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.errmessage = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.errmessage != null && message.hasOwnProperty("errmessage"))
                object.errmessage = message.errmessage;
            return object;
        };

        /**
         * Converts this DisconnectNtf to JSON.
         * @function toJSON
         * @memberof CLGT.DisconnectNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisconnectNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DisconnectNtf;
    })();

    CLGT.ItemInfo = (function() {

        /**
         * Properties of an ItemInfo.
         * @memberof CLGT
         * @interface IItemInfo
         * @property {number|null} [itemId] ItemInfo itemId
         * @property {number|null} [itemSubId] ItemInfo itemSubId
         * @property {number|Long|null} [itemCount] ItemInfo itemCount
         */

        /**
         * Constructs a new ItemInfo.
         * @memberof CLGT
         * @classdesc Represents an ItemInfo.
         * @implements IItemInfo
         * @constructor
         * @param {CLGT.IItemInfo=} [properties] Properties to set
         */
        function ItemInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemInfo itemId.
         * @member {number} itemId
         * @memberof CLGT.ItemInfo
         * @instance
         */
        ItemInfo.prototype.itemId = 0;

        /**
         * ItemInfo itemSubId.
         * @member {number} itemSubId
         * @memberof CLGT.ItemInfo
         * @instance
         */
        ItemInfo.prototype.itemSubId = 0;

        /**
         * ItemInfo itemCount.
         * @member {number|Long} itemCount
         * @memberof CLGT.ItemInfo
         * @instance
         */
        ItemInfo.prototype.itemCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ItemInfo instance using the specified properties.
         * @function create
         * @memberof CLGT.ItemInfo
         * @static
         * @param {CLGT.IItemInfo=} [properties] Properties to set
         * @returns {CLGT.ItemInfo} ItemInfo instance
         */
        ItemInfo.create = function create(properties) {
            return new ItemInfo(properties);
        };

        /**
         * Encodes the specified ItemInfo message. Does not implicitly {@link CLGT.ItemInfo.verify|verify} messages.
         * @function encode
         * @memberof CLGT.ItemInfo
         * @static
         * @param {CLGT.IItemInfo} message ItemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            if (message.itemSubId != null && Object.hasOwnProperty.call(message, "itemSubId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.itemSubId);
            if (message.itemCount != null && Object.hasOwnProperty.call(message, "itemCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.itemCount);
            return writer;
        };

        /**
         * Encodes the specified ItemInfo message, length delimited. Does not implicitly {@link CLGT.ItemInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.ItemInfo
         * @static
         * @param {CLGT.IItemInfo} message ItemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.ItemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.ItemInfo} ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.ItemInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.int32();
                    break;
                case 2:
                    message.itemSubId = reader.int32();
                    break;
                case 3:
                    message.itemCount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.ItemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.ItemInfo} ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemInfo message.
         * @function verify
         * @memberof CLGT.ItemInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isInteger(message.itemId))
                    return "itemId: integer expected";
            if (message.itemSubId != null && message.hasOwnProperty("itemSubId"))
                if (!$util.isInteger(message.itemSubId))
                    return "itemSubId: integer expected";
            if (message.itemCount != null && message.hasOwnProperty("itemCount"))
                if (!$util.isInteger(message.itemCount) && !(message.itemCount && $util.isInteger(message.itemCount.low) && $util.isInteger(message.itemCount.high)))
                    return "itemCount: integer|Long expected";
            return null;
        };

        /**
         * Creates an ItemInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.ItemInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.ItemInfo} ItemInfo
         */
        ItemInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.ItemInfo)
                return object;
            var message = new $root.CLGT.ItemInfo();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.itemSubId != null)
                message.itemSubId = object.itemSubId | 0;
            if (object.itemCount != null)
                if ($util.Long)
                    (message.itemCount = $util.Long.fromValue(object.itemCount)).unsigned = false;
                else if (typeof object.itemCount === "string")
                    message.itemCount = parseInt(object.itemCount, 10);
                else if (typeof object.itemCount === "number")
                    message.itemCount = object.itemCount;
                else if (typeof object.itemCount === "object")
                    message.itemCount = new $util.LongBits(object.itemCount.low >>> 0, object.itemCount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an ItemInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.ItemInfo
         * @static
         * @param {CLGT.ItemInfo} message ItemInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ItemInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.itemSubId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.itemCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.itemCount = options.longs === String ? "0" : 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.itemSubId != null && message.hasOwnProperty("itemSubId"))
                object.itemSubId = message.itemSubId;
            if (message.itemCount != null && message.hasOwnProperty("itemCount"))
                if (typeof message.itemCount === "number")
                    object.itemCount = options.longs === String ? String(message.itemCount) : message.itemCount;
                else
                    object.itemCount = options.longs === String ? $util.Long.prototype.toString.call(message.itemCount) : options.longs === Number ? new $util.LongBits(message.itemCount.low >>> 0, message.itemCount.high >>> 0).toNumber() : message.itemCount;
            return object;
        };

        /**
         * Converts this ItemInfo to JSON.
         * @function toJSON
         * @memberof CLGT.ItemInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ItemInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ItemInfo;
    })();

    CLGT.ShellCheckUpdateReq = (function() {

        /**
         * Properties of a ShellCheckUpdateReq.
         * @memberof CLGT
         * @interface IShellCheckUpdateReq
         */

        /**
         * Constructs a new ShellCheckUpdateReq.
         * @memberof CLGT
         * @classdesc Represents a ShellCheckUpdateReq.
         * @implements IShellCheckUpdateReq
         * @constructor
         * @param {CLGT.IShellCheckUpdateReq=} [properties] Properties to set
         */
        function ShellCheckUpdateReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ShellCheckUpdateReq instance using the specified properties.
         * @function create
         * @memberof CLGT.ShellCheckUpdateReq
         * @static
         * @param {CLGT.IShellCheckUpdateReq=} [properties] Properties to set
         * @returns {CLGT.ShellCheckUpdateReq} ShellCheckUpdateReq instance
         */
        ShellCheckUpdateReq.create = function create(properties) {
            return new ShellCheckUpdateReq(properties);
        };

        /**
         * Encodes the specified ShellCheckUpdateReq message. Does not implicitly {@link CLGT.ShellCheckUpdateReq.verify|verify} messages.
         * @function encode
         * @memberof CLGT.ShellCheckUpdateReq
         * @static
         * @param {CLGT.IShellCheckUpdateReq} message ShellCheckUpdateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShellCheckUpdateReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ShellCheckUpdateReq message, length delimited. Does not implicitly {@link CLGT.ShellCheckUpdateReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.ShellCheckUpdateReq
         * @static
         * @param {CLGT.IShellCheckUpdateReq} message ShellCheckUpdateReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShellCheckUpdateReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShellCheckUpdateReq message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.ShellCheckUpdateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.ShellCheckUpdateReq} ShellCheckUpdateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShellCheckUpdateReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.ShellCheckUpdateReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ShellCheckUpdateReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.ShellCheckUpdateReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.ShellCheckUpdateReq} ShellCheckUpdateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShellCheckUpdateReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShellCheckUpdateReq message.
         * @function verify
         * @memberof CLGT.ShellCheckUpdateReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShellCheckUpdateReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ShellCheckUpdateReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.ShellCheckUpdateReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.ShellCheckUpdateReq} ShellCheckUpdateReq
         */
        ShellCheckUpdateReq.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.ShellCheckUpdateReq)
                return object;
            return new $root.CLGT.ShellCheckUpdateReq();
        };

        /**
         * Creates a plain object from a ShellCheckUpdateReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.ShellCheckUpdateReq
         * @static
         * @param {CLGT.ShellCheckUpdateReq} message ShellCheckUpdateReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShellCheckUpdateReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ShellCheckUpdateReq to JSON.
         * @function toJSON
         * @memberof CLGT.ShellCheckUpdateReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShellCheckUpdateReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ShellCheckUpdateReq;
    })();

    CLGT.ShellCheckUpdateAck = (function() {

        /**
         * Properties of a ShellCheckUpdateAck.
         * @memberof CLGT
         * @interface IShellCheckUpdateAck
         * @property {number|null} [errcode] ShellCheckUpdateAck errcode
         * @property {boolean|null} [success] ShellCheckUpdateAck success
         * @property {number|null} [shellVersion] ShellCheckUpdateAck shellVersion
         * @property {string|null} [shellUpdateName] ShellCheckUpdateAck shellUpdateName
         * @property {string|null} [shellUpdateUrl] ShellCheckUpdateAck shellUpdateUrl
         * @property {string|null} [scriptUpdateDns] ShellCheckUpdateAck scriptUpdateDns
         */

        /**
         * Constructs a new ShellCheckUpdateAck.
         * @memberof CLGT
         * @classdesc Represents a ShellCheckUpdateAck.
         * @implements IShellCheckUpdateAck
         * @constructor
         * @param {CLGT.IShellCheckUpdateAck=} [properties] Properties to set
         */
        function ShellCheckUpdateAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShellCheckUpdateAck errcode.
         * @member {number} errcode
         * @memberof CLGT.ShellCheckUpdateAck
         * @instance
         */
        ShellCheckUpdateAck.prototype.errcode = 0;

        /**
         * ShellCheckUpdateAck success.
         * @member {boolean} success
         * @memberof CLGT.ShellCheckUpdateAck
         * @instance
         */
        ShellCheckUpdateAck.prototype.success = false;

        /**
         * ShellCheckUpdateAck shellVersion.
         * @member {number} shellVersion
         * @memberof CLGT.ShellCheckUpdateAck
         * @instance
         */
        ShellCheckUpdateAck.prototype.shellVersion = 0;

        /**
         * ShellCheckUpdateAck shellUpdateName.
         * @member {string} shellUpdateName
         * @memberof CLGT.ShellCheckUpdateAck
         * @instance
         */
        ShellCheckUpdateAck.prototype.shellUpdateName = "";

        /**
         * ShellCheckUpdateAck shellUpdateUrl.
         * @member {string} shellUpdateUrl
         * @memberof CLGT.ShellCheckUpdateAck
         * @instance
         */
        ShellCheckUpdateAck.prototype.shellUpdateUrl = "";

        /**
         * ShellCheckUpdateAck scriptUpdateDns.
         * @member {string} scriptUpdateDns
         * @memberof CLGT.ShellCheckUpdateAck
         * @instance
         */
        ShellCheckUpdateAck.prototype.scriptUpdateDns = "";

        /**
         * Creates a new ShellCheckUpdateAck instance using the specified properties.
         * @function create
         * @memberof CLGT.ShellCheckUpdateAck
         * @static
         * @param {CLGT.IShellCheckUpdateAck=} [properties] Properties to set
         * @returns {CLGT.ShellCheckUpdateAck} ShellCheckUpdateAck instance
         */
        ShellCheckUpdateAck.create = function create(properties) {
            return new ShellCheckUpdateAck(properties);
        };

        /**
         * Encodes the specified ShellCheckUpdateAck message. Does not implicitly {@link CLGT.ShellCheckUpdateAck.verify|verify} messages.
         * @function encode
         * @memberof CLGT.ShellCheckUpdateAck
         * @static
         * @param {CLGT.IShellCheckUpdateAck} message ShellCheckUpdateAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShellCheckUpdateAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && Object.hasOwnProperty.call(message, "errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.success);
            if (message.shellVersion != null && Object.hasOwnProperty.call(message, "shellVersion"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.shellVersion);
            if (message.shellUpdateName != null && Object.hasOwnProperty.call(message, "shellUpdateName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.shellUpdateName);
            if (message.shellUpdateUrl != null && Object.hasOwnProperty.call(message, "shellUpdateUrl"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.shellUpdateUrl);
            if (message.scriptUpdateDns != null && Object.hasOwnProperty.call(message, "scriptUpdateDns"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.scriptUpdateDns);
            return writer;
        };

        /**
         * Encodes the specified ShellCheckUpdateAck message, length delimited. Does not implicitly {@link CLGT.ShellCheckUpdateAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.ShellCheckUpdateAck
         * @static
         * @param {CLGT.IShellCheckUpdateAck} message ShellCheckUpdateAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShellCheckUpdateAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShellCheckUpdateAck message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.ShellCheckUpdateAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.ShellCheckUpdateAck} ShellCheckUpdateAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShellCheckUpdateAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.ShellCheckUpdateAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                case 2:
                    message.success = reader.bool();
                    break;
                case 3:
                    message.shellVersion = reader.int32();
                    break;
                case 4:
                    message.shellUpdateName = reader.string();
                    break;
                case 5:
                    message.shellUpdateUrl = reader.string();
                    break;
                case 6:
                    message.scriptUpdateDns = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ShellCheckUpdateAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.ShellCheckUpdateAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.ShellCheckUpdateAck} ShellCheckUpdateAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShellCheckUpdateAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShellCheckUpdateAck message.
         * @function verify
         * @memberof CLGT.ShellCheckUpdateAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShellCheckUpdateAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isInteger(message.errcode))
                    return "errcode: integer expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.shellVersion != null && message.hasOwnProperty("shellVersion"))
                if (!$util.isInteger(message.shellVersion))
                    return "shellVersion: integer expected";
            if (message.shellUpdateName != null && message.hasOwnProperty("shellUpdateName"))
                if (!$util.isString(message.shellUpdateName))
                    return "shellUpdateName: string expected";
            if (message.shellUpdateUrl != null && message.hasOwnProperty("shellUpdateUrl"))
                if (!$util.isString(message.shellUpdateUrl))
                    return "shellUpdateUrl: string expected";
            if (message.scriptUpdateDns != null && message.hasOwnProperty("scriptUpdateDns"))
                if (!$util.isString(message.scriptUpdateDns))
                    return "scriptUpdateDns: string expected";
            return null;
        };

        /**
         * Creates a ShellCheckUpdateAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.ShellCheckUpdateAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.ShellCheckUpdateAck} ShellCheckUpdateAck
         */
        ShellCheckUpdateAck.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.ShellCheckUpdateAck)
                return object;
            var message = new $root.CLGT.ShellCheckUpdateAck();
            if (object.errcode != null)
                message.errcode = object.errcode | 0;
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.shellVersion != null)
                message.shellVersion = object.shellVersion | 0;
            if (object.shellUpdateName != null)
                message.shellUpdateName = String(object.shellUpdateName);
            if (object.shellUpdateUrl != null)
                message.shellUpdateUrl = String(object.shellUpdateUrl);
            if (object.scriptUpdateDns != null)
                message.scriptUpdateDns = String(object.scriptUpdateDns);
            return message;
        };

        /**
         * Creates a plain object from a ShellCheckUpdateAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.ShellCheckUpdateAck
         * @static
         * @param {CLGT.ShellCheckUpdateAck} message ShellCheckUpdateAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShellCheckUpdateAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errcode = 0;
                object.success = false;
                object.shellVersion = 0;
                object.shellUpdateName = "";
                object.shellUpdateUrl = "";
                object.scriptUpdateDns = "";
            }
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                object.errcode = message.errcode;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.shellVersion != null && message.hasOwnProperty("shellVersion"))
                object.shellVersion = message.shellVersion;
            if (message.shellUpdateName != null && message.hasOwnProperty("shellUpdateName"))
                object.shellUpdateName = message.shellUpdateName;
            if (message.shellUpdateUrl != null && message.hasOwnProperty("shellUpdateUrl"))
                object.shellUpdateUrl = message.shellUpdateUrl;
            if (message.scriptUpdateDns != null && message.hasOwnProperty("scriptUpdateDns"))
                object.scriptUpdateDns = message.scriptUpdateDns;
            return object;
        };

        /**
         * Converts this ShellCheckUpdateAck to JSON.
         * @function toJSON
         * @memberof CLGT.ShellCheckUpdateAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShellCheckUpdateAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ShellCheckUpdateAck;
    })();

    CLGT.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof CLGT
         * @interface ILoginReq
         * @property {number|null} [loginType] LoginReq loginType
         * @property {string|null} [token] LoginReq token
         */

        /**
         * Constructs a new LoginReq.
         * @memberof CLGT
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {CLGT.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq loginType.
         * @member {number} loginType
         * @memberof CLGT.LoginReq
         * @instance
         */
        LoginReq.prototype.loginType = 0;

        /**
         * LoginReq token.
         * @member {string} token
         * @memberof CLGT.LoginReq
         * @instance
         */
        LoginReq.prototype.token = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof CLGT.LoginReq
         * @static
         * @param {CLGT.ILoginReq=} [properties] Properties to set
         * @returns {CLGT.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link CLGT.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof CLGT.LoginReq
         * @static
         * @param {CLGT.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.loginType != null && Object.hasOwnProperty.call(message, "loginType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.loginType);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link CLGT.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.LoginReq
         * @static
         * @param {CLGT.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.loginType = reader.int32();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof CLGT.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.loginType != null && message.hasOwnProperty("loginType"))
                if (!$util.isInteger(message.loginType))
                    return "loginType: integer expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.LoginReq)
                return object;
            var message = new $root.CLGT.LoginReq();
            if (object.loginType != null)
                message.loginType = object.loginType | 0;
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.LoginReq
         * @static
         * @param {CLGT.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.loginType = 0;
                object.token = "";
            }
            if (message.loginType != null && message.hasOwnProperty("loginType"))
                object.loginType = message.loginType;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof CLGT.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    CLGT.LoginAck = (function() {

        /**
         * Properties of a LoginAck.
         * @memberof CLGT
         * @interface ILoginAck
         * @property {number|null} [errcode] LoginAck errcode
         * @property {string|null} [userGuid] LoginAck userGuid
         * @property {number|null} [userId] LoginAck userId
         * @property {string|null} [nickname] LoginAck nickname
         * @property {boolean|null} [nicknameMdf] LoginAck nicknameMdf
         * @property {number|null} [gender] LoginAck gender
         * @property {number|null} [head] LoginAck head
         * @property {number|null} [headFrame] LoginAck headFrame
         * @property {number|null} [level] LoginAck level
         * @property {number|Long|null} [levelExp] LoginAck levelExp
         * @property {number|null} [vipLevel] LoginAck vipLevel
         * @property {number|Long|null} [vipLevelExp] LoginAck vipLevelExp
         * @property {string|null} [phone] LoginAck phone
         * @property {number|Long|null} [diamond] LoginAck diamond
         * @property {number|Long|null} [currency] LoginAck currency
         * @property {string|null} [account] LoginAck account
         * @property {Array.<CLGT.IItemInfo>|null} [items] LoginAck items
         * @property {number|null} [serverTimestamp] LoginAck serverTimestamp
         * @property {string|null} [email] LoginAck email
         * @property {string|null} [address] LoginAck address
         * @property {string|null} [personalSignature] LoginAck personalSignature
         * @property {string|null} [clientConfigMd5] LoginAck clientConfigMd5
         * @property {number|Long|null} [maxGunValue] LoginAck maxGunValue
         * @property {string|null} [timeString] LoginAck timeString
         * @property {boolean|null} [bankPasswordFlag] LoginAck bankPasswordFlag
         * @property {number|Long|null} [bankCurrency] LoginAck bankCurrency
         * @property {number|null} [lastGameId] LoginAck lastGameId
         * @property {number|null} [lastRoomId] LoginAck lastRoomId
         * @property {string|null} [headUrl] LoginAck headUrl
         * @property {number|null} [maxStart] LoginAck maxStart
         * @property {Array.<string>|null} [agentServerList] LoginAck agentServerList
         * @property {Array.<number>|null} [gameKindList] LoginAck gameKindList
         * @property {boolean|null} [state] LoginAck state
         */

        /**
         * Constructs a new LoginAck.
         * @memberof CLGT
         * @classdesc Represents a LoginAck.
         * @implements ILoginAck
         * @constructor
         * @param {CLGT.ILoginAck=} [properties] Properties to set
         */
        function LoginAck(properties) {
            this.items = [];
            this.agentServerList = [];
            this.gameKindList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginAck errcode.
         * @member {number} errcode
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.errcode = 0;

        /**
         * LoginAck userGuid.
         * @member {string} userGuid
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.userGuid = "";

        /**
         * LoginAck userId.
         * @member {number} userId
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.userId = 0;

        /**
         * LoginAck nickname.
         * @member {string} nickname
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.nickname = "";

        /**
         * LoginAck nicknameMdf.
         * @member {boolean} nicknameMdf
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.nicknameMdf = false;

        /**
         * LoginAck gender.
         * @member {number} gender
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.gender = 0;

        /**
         * LoginAck head.
         * @member {number} head
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.head = 0;

        /**
         * LoginAck headFrame.
         * @member {number} headFrame
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.headFrame = 0;

        /**
         * LoginAck level.
         * @member {number} level
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.level = 0;

        /**
         * LoginAck levelExp.
         * @member {number|Long} levelExp
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.levelExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginAck vipLevel.
         * @member {number} vipLevel
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.vipLevel = 0;

        /**
         * LoginAck vipLevelExp.
         * @member {number|Long} vipLevelExp
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.vipLevelExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginAck phone.
         * @member {string} phone
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.phone = "";

        /**
         * LoginAck diamond.
         * @member {number|Long} diamond
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginAck currency.
         * @member {number|Long} currency
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.currency = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginAck account.
         * @member {string} account
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.account = "";

        /**
         * LoginAck items.
         * @member {Array.<CLGT.IItemInfo>} items
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.items = $util.emptyArray;

        /**
         * LoginAck serverTimestamp.
         * @member {number} serverTimestamp
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.serverTimestamp = 0;

        /**
         * LoginAck email.
         * @member {string} email
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.email = "";

        /**
         * LoginAck address.
         * @member {string} address
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.address = "";

        /**
         * LoginAck personalSignature.
         * @member {string} personalSignature
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.personalSignature = "";

        /**
         * LoginAck clientConfigMd5.
         * @member {string} clientConfigMd5
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.clientConfigMd5 = "";

        /**
         * LoginAck maxGunValue.
         * @member {number|Long} maxGunValue
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.maxGunValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginAck timeString.
         * @member {string} timeString
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.timeString = "";

        /**
         * LoginAck bankPasswordFlag.
         * @member {boolean} bankPasswordFlag
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.bankPasswordFlag = false;

        /**
         * LoginAck bankCurrency.
         * @member {number|Long} bankCurrency
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.bankCurrency = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginAck lastGameId.
         * @member {number} lastGameId
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.lastGameId = 0;

        /**
         * LoginAck lastRoomId.
         * @member {number} lastRoomId
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.lastRoomId = 0;

        /**
         * LoginAck headUrl.
         * @member {string} headUrl
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.headUrl = "";

        /**
         * LoginAck maxStart.
         * @member {number} maxStart
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.maxStart = 0;

        /**
         * LoginAck agentServerList.
         * @member {Array.<string>} agentServerList
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.agentServerList = $util.emptyArray;

        /**
         * LoginAck gameKindList.
         * @member {Array.<number>} gameKindList
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.gameKindList = $util.emptyArray;

        /**
         * LoginAck state.
         * @member {boolean} state
         * @memberof CLGT.LoginAck
         * @instance
         */
        LoginAck.prototype.state = false;

        /**
         * Creates a new LoginAck instance using the specified properties.
         * @function create
         * @memberof CLGT.LoginAck
         * @static
         * @param {CLGT.ILoginAck=} [properties] Properties to set
         * @returns {CLGT.LoginAck} LoginAck instance
         */
        LoginAck.create = function create(properties) {
            return new LoginAck(properties);
        };

        /**
         * Encodes the specified LoginAck message. Does not implicitly {@link CLGT.LoginAck.verify|verify} messages.
         * @function encode
         * @memberof CLGT.LoginAck
         * @static
         * @param {CLGT.ILoginAck} message LoginAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && Object.hasOwnProperty.call(message, "errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            if (message.userGuid != null && Object.hasOwnProperty.call(message, "userGuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userGuid);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nickname);
            if (message.nicknameMdf != null && Object.hasOwnProperty.call(message, "nicknameMdf"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.nicknameMdf);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gender);
            if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.head);
            if (message.headFrame != null && Object.hasOwnProperty.call(message, "headFrame"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.headFrame);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.level);
            if (message.levelExp != null && Object.hasOwnProperty.call(message, "levelExp"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.levelExp);
            if (message.vipLevel != null && Object.hasOwnProperty.call(message, "vipLevel"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.vipLevel);
            if (message.vipLevelExp != null && Object.hasOwnProperty.call(message, "vipLevelExp"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.vipLevelExp);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.phone);
            if (message.diamond != null && Object.hasOwnProperty.call(message, "diamond"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.diamond);
            if (message.currency != null && Object.hasOwnProperty.call(message, "currency"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.currency);
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.account);
            if (message.items != null && message.items.length)
                for (var i = 0; i < message.items.length; ++i)
                    $root.CLGT.ItemInfo.encode(message.items[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.serverTimestamp != null && Object.hasOwnProperty.call(message, "serverTimestamp"))
                writer.uint32(/* id 18, wireType 5 =*/149).fixed32(message.serverTimestamp);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.email);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.address);
            if (message.personalSignature != null && Object.hasOwnProperty.call(message, "personalSignature"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.personalSignature);
            if (message.clientConfigMd5 != null && Object.hasOwnProperty.call(message, "clientConfigMd5"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.clientConfigMd5);
            if (message.maxGunValue != null && Object.hasOwnProperty.call(message, "maxGunValue"))
                writer.uint32(/* id 23, wireType 0 =*/184).int64(message.maxGunValue);
            if (message.timeString != null && Object.hasOwnProperty.call(message, "timeString"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.timeString);
            if (message.bankPasswordFlag != null && Object.hasOwnProperty.call(message, "bankPasswordFlag"))
                writer.uint32(/* id 25, wireType 0 =*/200).bool(message.bankPasswordFlag);
            if (message.bankCurrency != null && Object.hasOwnProperty.call(message, "bankCurrency"))
                writer.uint32(/* id 26, wireType 0 =*/208).int64(message.bankCurrency);
            if (message.lastGameId != null && Object.hasOwnProperty.call(message, "lastGameId"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.lastGameId);
            if (message.lastRoomId != null && Object.hasOwnProperty.call(message, "lastRoomId"))
                writer.uint32(/* id 28, wireType 0 =*/224).int32(message.lastRoomId);
            if (message.headUrl != null && Object.hasOwnProperty.call(message, "headUrl"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.headUrl);
            if (message.maxStart != null && Object.hasOwnProperty.call(message, "maxStart"))
                writer.uint32(/* id 30, wireType 0 =*/240).int32(message.maxStart);
            if (message.agentServerList != null && message.agentServerList.length)
                for (var i = 0; i < message.agentServerList.length; ++i)
                    writer.uint32(/* id 31, wireType 2 =*/250).string(message.agentServerList[i]);
            if (message.gameKindList != null && message.gameKindList.length) {
                writer.uint32(/* id 32, wireType 2 =*/258).fork();
                for (var i = 0; i < message.gameKindList.length; ++i)
                    writer.int32(message.gameKindList[i]);
                writer.ldelim();
            }
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 33, wireType 0 =*/264).bool(message.state);
            return writer;
        };

        /**
         * Encodes the specified LoginAck message, length delimited. Does not implicitly {@link CLGT.LoginAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.LoginAck
         * @static
         * @param {CLGT.ILoginAck} message LoginAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginAck message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.LoginAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.LoginAck} LoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.LoginAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                case 2:
                    message.userGuid = reader.string();
                    break;
                case 3:
                    message.userId = reader.int32();
                    break;
                case 4:
                    message.nickname = reader.string();
                    break;
                case 5:
                    message.nicknameMdf = reader.bool();
                    break;
                case 6:
                    message.gender = reader.int32();
                    break;
                case 7:
                    message.head = reader.int32();
                    break;
                case 8:
                    message.headFrame = reader.int32();
                    break;
                case 9:
                    message.level = reader.int32();
                    break;
                case 10:
                    message.levelExp = reader.int64();
                    break;
                case 11:
                    message.vipLevel = reader.int32();
                    break;
                case 12:
                    message.vipLevelExp = reader.int64();
                    break;
                case 13:
                    message.phone = reader.string();
                    break;
                case 14:
                    message.diamond = reader.int64();
                    break;
                case 15:
                    message.currency = reader.int64();
                    break;
                case 16:
                    message.account = reader.string();
                    break;
                case 17:
                    if (!(message.items && message.items.length))
                        message.items = [];
                    message.items.push($root.CLGT.ItemInfo.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.serverTimestamp = reader.fixed32();
                    break;
                case 19:
                    message.email = reader.string();
                    break;
                case 20:
                    message.address = reader.string();
                    break;
                case 21:
                    message.personalSignature = reader.string();
                    break;
                case 22:
                    message.clientConfigMd5 = reader.string();
                    break;
                case 23:
                    message.maxGunValue = reader.int64();
                    break;
                case 24:
                    message.timeString = reader.string();
                    break;
                case 25:
                    message.bankPasswordFlag = reader.bool();
                    break;
                case 26:
                    message.bankCurrency = reader.int64();
                    break;
                case 27:
                    message.lastGameId = reader.int32();
                    break;
                case 28:
                    message.lastRoomId = reader.int32();
                    break;
                case 29:
                    message.headUrl = reader.string();
                    break;
                case 30:
                    message.maxStart = reader.int32();
                    break;
                case 31:
                    if (!(message.agentServerList && message.agentServerList.length))
                        message.agentServerList = [];
                    message.agentServerList.push(reader.string());
                    break;
                case 32:
                    if (!(message.gameKindList && message.gameKindList.length))
                        message.gameKindList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.gameKindList.push(reader.int32());
                    } else
                        message.gameKindList.push(reader.int32());
                    break;
                case 33:
                    message.state = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.LoginAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.LoginAck} LoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginAck message.
         * @function verify
         * @memberof CLGT.LoginAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isInteger(message.errcode))
                    return "errcode: integer expected";
            if (message.userGuid != null && message.hasOwnProperty("userGuid"))
                if (!$util.isString(message.userGuid))
                    return "userGuid: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.nicknameMdf != null && message.hasOwnProperty("nicknameMdf"))
                if (typeof message.nicknameMdf !== "boolean")
                    return "nicknameMdf: boolean expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isInteger(message.gender))
                    return "gender: integer expected";
            if (message.head != null && message.hasOwnProperty("head"))
                if (!$util.isInteger(message.head))
                    return "head: integer expected";
            if (message.headFrame != null && message.hasOwnProperty("headFrame"))
                if (!$util.isInteger(message.headFrame))
                    return "headFrame: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.levelExp != null && message.hasOwnProperty("levelExp"))
                if (!$util.isInteger(message.levelExp) && !(message.levelExp && $util.isInteger(message.levelExp.low) && $util.isInteger(message.levelExp.high)))
                    return "levelExp: integer|Long expected";
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                if (!$util.isInteger(message.vipLevel))
                    return "vipLevel: integer expected";
            if (message.vipLevelExp != null && message.hasOwnProperty("vipLevelExp"))
                if (!$util.isInteger(message.vipLevelExp) && !(message.vipLevelExp && $util.isInteger(message.vipLevelExp.low) && $util.isInteger(message.vipLevelExp.high)))
                    return "vipLevelExp: integer|Long expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond) && !(message.diamond && $util.isInteger(message.diamond.low) && $util.isInteger(message.diamond.high)))
                    return "diamond: integer|Long expected";
            if (message.currency != null && message.hasOwnProperty("currency"))
                if (!$util.isInteger(message.currency) && !(message.currency && $util.isInteger(message.currency.low) && $util.isInteger(message.currency.high)))
                    return "currency: integer|Long expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (var i = 0; i < message.items.length; ++i) {
                    var error = $root.CLGT.ItemInfo.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                if (!$util.isInteger(message.serverTimestamp))
                    return "serverTimestamp: integer expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.personalSignature != null && message.hasOwnProperty("personalSignature"))
                if (!$util.isString(message.personalSignature))
                    return "personalSignature: string expected";
            if (message.clientConfigMd5 != null && message.hasOwnProperty("clientConfigMd5"))
                if (!$util.isString(message.clientConfigMd5))
                    return "clientConfigMd5: string expected";
            if (message.maxGunValue != null && message.hasOwnProperty("maxGunValue"))
                if (!$util.isInteger(message.maxGunValue) && !(message.maxGunValue && $util.isInteger(message.maxGunValue.low) && $util.isInteger(message.maxGunValue.high)))
                    return "maxGunValue: integer|Long expected";
            if (message.timeString != null && message.hasOwnProperty("timeString"))
                if (!$util.isString(message.timeString))
                    return "timeString: string expected";
            if (message.bankPasswordFlag != null && message.hasOwnProperty("bankPasswordFlag"))
                if (typeof message.bankPasswordFlag !== "boolean")
                    return "bankPasswordFlag: boolean expected";
            if (message.bankCurrency != null && message.hasOwnProperty("bankCurrency"))
                if (!$util.isInteger(message.bankCurrency) && !(message.bankCurrency && $util.isInteger(message.bankCurrency.low) && $util.isInteger(message.bankCurrency.high)))
                    return "bankCurrency: integer|Long expected";
            if (message.lastGameId != null && message.hasOwnProperty("lastGameId"))
                if (!$util.isInteger(message.lastGameId))
                    return "lastGameId: integer expected";
            if (message.lastRoomId != null && message.hasOwnProperty("lastRoomId"))
                if (!$util.isInteger(message.lastRoomId))
                    return "lastRoomId: integer expected";
            if (message.headUrl != null && message.hasOwnProperty("headUrl"))
                if (!$util.isString(message.headUrl))
                    return "headUrl: string expected";
            if (message.maxStart != null && message.hasOwnProperty("maxStart"))
                if (!$util.isInteger(message.maxStart))
                    return "maxStart: integer expected";
            if (message.agentServerList != null && message.hasOwnProperty("agentServerList")) {
                if (!Array.isArray(message.agentServerList))
                    return "agentServerList: array expected";
                for (var i = 0; i < message.agentServerList.length; ++i)
                    if (!$util.isString(message.agentServerList[i]))
                        return "agentServerList: string[] expected";
            }
            if (message.gameKindList != null && message.hasOwnProperty("gameKindList")) {
                if (!Array.isArray(message.gameKindList))
                    return "gameKindList: array expected";
                for (var i = 0; i < message.gameKindList.length; ++i)
                    if (!$util.isInteger(message.gameKindList[i]))
                        return "gameKindList: integer[] expected";
            }
            if (message.state != null && message.hasOwnProperty("state"))
                if (typeof message.state !== "boolean")
                    return "state: boolean expected";
            return null;
        };

        /**
         * Creates a LoginAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.LoginAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.LoginAck} LoginAck
         */
        LoginAck.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.LoginAck)
                return object;
            var message = new $root.CLGT.LoginAck();
            if (object.errcode != null)
                message.errcode = object.errcode | 0;
            if (object.userGuid != null)
                message.userGuid = String(object.userGuid);
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.nicknameMdf != null)
                message.nicknameMdf = Boolean(object.nicknameMdf);
            if (object.gender != null)
                message.gender = object.gender | 0;
            if (object.head != null)
                message.head = object.head | 0;
            if (object.headFrame != null)
                message.headFrame = object.headFrame | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.levelExp != null)
                if ($util.Long)
                    (message.levelExp = $util.Long.fromValue(object.levelExp)).unsigned = false;
                else if (typeof object.levelExp === "string")
                    message.levelExp = parseInt(object.levelExp, 10);
                else if (typeof object.levelExp === "number")
                    message.levelExp = object.levelExp;
                else if (typeof object.levelExp === "object")
                    message.levelExp = new $util.LongBits(object.levelExp.low >>> 0, object.levelExp.high >>> 0).toNumber();
            if (object.vipLevel != null)
                message.vipLevel = object.vipLevel | 0;
            if (object.vipLevelExp != null)
                if ($util.Long)
                    (message.vipLevelExp = $util.Long.fromValue(object.vipLevelExp)).unsigned = false;
                else if (typeof object.vipLevelExp === "string")
                    message.vipLevelExp = parseInt(object.vipLevelExp, 10);
                else if (typeof object.vipLevelExp === "number")
                    message.vipLevelExp = object.vipLevelExp;
                else if (typeof object.vipLevelExp === "object")
                    message.vipLevelExp = new $util.LongBits(object.vipLevelExp.low >>> 0, object.vipLevelExp.high >>> 0).toNumber();
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.diamond != null)
                if ($util.Long)
                    (message.diamond = $util.Long.fromValue(object.diamond)).unsigned = false;
                else if (typeof object.diamond === "string")
                    message.diamond = parseInt(object.diamond, 10);
                else if (typeof object.diamond === "number")
                    message.diamond = object.diamond;
                else if (typeof object.diamond === "object")
                    message.diamond = new $util.LongBits(object.diamond.low >>> 0, object.diamond.high >>> 0).toNumber();
            if (object.currency != null)
                if ($util.Long)
                    (message.currency = $util.Long.fromValue(object.currency)).unsigned = false;
                else if (typeof object.currency === "string")
                    message.currency = parseInt(object.currency, 10);
                else if (typeof object.currency === "number")
                    message.currency = object.currency;
                else if (typeof object.currency === "object")
                    message.currency = new $util.LongBits(object.currency.low >>> 0, object.currency.high >>> 0).toNumber();
            if (object.account != null)
                message.account = String(object.account);
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".CLGT.LoginAck.items: array expected");
                message.items = [];
                for (var i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".CLGT.LoginAck.items: object expected");
                    message.items[i] = $root.CLGT.ItemInfo.fromObject(object.items[i]);
                }
            }
            if (object.serverTimestamp != null)
                message.serverTimestamp = object.serverTimestamp >>> 0;
            if (object.email != null)
                message.email = String(object.email);
            if (object.address != null)
                message.address = String(object.address);
            if (object.personalSignature != null)
                message.personalSignature = String(object.personalSignature);
            if (object.clientConfigMd5 != null)
                message.clientConfigMd5 = String(object.clientConfigMd5);
            if (object.maxGunValue != null)
                if ($util.Long)
                    (message.maxGunValue = $util.Long.fromValue(object.maxGunValue)).unsigned = false;
                else if (typeof object.maxGunValue === "string")
                    message.maxGunValue = parseInt(object.maxGunValue, 10);
                else if (typeof object.maxGunValue === "number")
                    message.maxGunValue = object.maxGunValue;
                else if (typeof object.maxGunValue === "object")
                    message.maxGunValue = new $util.LongBits(object.maxGunValue.low >>> 0, object.maxGunValue.high >>> 0).toNumber();
            if (object.timeString != null)
                message.timeString = String(object.timeString);
            if (object.bankPasswordFlag != null)
                message.bankPasswordFlag = Boolean(object.bankPasswordFlag);
            if (object.bankCurrency != null)
                if ($util.Long)
                    (message.bankCurrency = $util.Long.fromValue(object.bankCurrency)).unsigned = false;
                else if (typeof object.bankCurrency === "string")
                    message.bankCurrency = parseInt(object.bankCurrency, 10);
                else if (typeof object.bankCurrency === "number")
                    message.bankCurrency = object.bankCurrency;
                else if (typeof object.bankCurrency === "object")
                    message.bankCurrency = new $util.LongBits(object.bankCurrency.low >>> 0, object.bankCurrency.high >>> 0).toNumber();
            if (object.lastGameId != null)
                message.lastGameId = object.lastGameId | 0;
            if (object.lastRoomId != null)
                message.lastRoomId = object.lastRoomId | 0;
            if (object.headUrl != null)
                message.headUrl = String(object.headUrl);
            if (object.maxStart != null)
                message.maxStart = object.maxStart | 0;
            if (object.agentServerList) {
                if (!Array.isArray(object.agentServerList))
                    throw TypeError(".CLGT.LoginAck.agentServerList: array expected");
                message.agentServerList = [];
                for (var i = 0; i < object.agentServerList.length; ++i)
                    message.agentServerList[i] = String(object.agentServerList[i]);
            }
            if (object.gameKindList) {
                if (!Array.isArray(object.gameKindList))
                    throw TypeError(".CLGT.LoginAck.gameKindList: array expected");
                message.gameKindList = [];
                for (var i = 0; i < object.gameKindList.length; ++i)
                    message.gameKindList[i] = object.gameKindList[i] | 0;
            }
            if (object.state != null)
                message.state = Boolean(object.state);
            return message;
        };

        /**
         * Creates a plain object from a LoginAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.LoginAck
         * @static
         * @param {CLGT.LoginAck} message LoginAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.items = [];
                object.agentServerList = [];
                object.gameKindList = [];
            }
            if (options.defaults) {
                object.errcode = 0;
                object.userGuid = "";
                object.userId = 0;
                object.nickname = "";
                object.nicknameMdf = false;
                object.gender = 0;
                object.head = 0;
                object.headFrame = 0;
                object.level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.levelExp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.levelExp = options.longs === String ? "0" : 0;
                object.vipLevel = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.vipLevelExp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.vipLevelExp = options.longs === String ? "0" : 0;
                object.phone = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.diamond = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.diamond = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.currency = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.currency = options.longs === String ? "0" : 0;
                object.account = "";
                object.serverTimestamp = 0;
                object.email = "";
                object.address = "";
                object.personalSignature = "";
                object.clientConfigMd5 = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.maxGunValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxGunValue = options.longs === String ? "0" : 0;
                object.timeString = "";
                object.bankPasswordFlag = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.bankCurrency = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bankCurrency = options.longs === String ? "0" : 0;
                object.lastGameId = 0;
                object.lastRoomId = 0;
                object.headUrl = "";
                object.maxStart = 0;
                object.state = false;
            }
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                object.errcode = message.errcode;
            if (message.userGuid != null && message.hasOwnProperty("userGuid"))
                object.userGuid = message.userGuid;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.nicknameMdf != null && message.hasOwnProperty("nicknameMdf"))
                object.nicknameMdf = message.nicknameMdf;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = message.head;
            if (message.headFrame != null && message.hasOwnProperty("headFrame"))
                object.headFrame = message.headFrame;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.levelExp != null && message.hasOwnProperty("levelExp"))
                if (typeof message.levelExp === "number")
                    object.levelExp = options.longs === String ? String(message.levelExp) : message.levelExp;
                else
                    object.levelExp = options.longs === String ? $util.Long.prototype.toString.call(message.levelExp) : options.longs === Number ? new $util.LongBits(message.levelExp.low >>> 0, message.levelExp.high >>> 0).toNumber() : message.levelExp;
            if (message.vipLevel != null && message.hasOwnProperty("vipLevel"))
                object.vipLevel = message.vipLevel;
            if (message.vipLevelExp != null && message.hasOwnProperty("vipLevelExp"))
                if (typeof message.vipLevelExp === "number")
                    object.vipLevelExp = options.longs === String ? String(message.vipLevelExp) : message.vipLevelExp;
                else
                    object.vipLevelExp = options.longs === String ? $util.Long.prototype.toString.call(message.vipLevelExp) : options.longs === Number ? new $util.LongBits(message.vipLevelExp.low >>> 0, message.vipLevelExp.high >>> 0).toNumber() : message.vipLevelExp;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (typeof message.diamond === "number")
                    object.diamond = options.longs === String ? String(message.diamond) : message.diamond;
                else
                    object.diamond = options.longs === String ? $util.Long.prototype.toString.call(message.diamond) : options.longs === Number ? new $util.LongBits(message.diamond.low >>> 0, message.diamond.high >>> 0).toNumber() : message.diamond;
            if (message.currency != null && message.hasOwnProperty("currency"))
                if (typeof message.currency === "number")
                    object.currency = options.longs === String ? String(message.currency) : message.currency;
                else
                    object.currency = options.longs === String ? $util.Long.prototype.toString.call(message.currency) : options.longs === Number ? new $util.LongBits(message.currency.low >>> 0, message.currency.high >>> 0).toNumber() : message.currency;
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.items && message.items.length) {
                object.items = [];
                for (var j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.CLGT.ItemInfo.toObject(message.items[j], options);
            }
            if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                object.serverTimestamp = message.serverTimestamp;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.personalSignature != null && message.hasOwnProperty("personalSignature"))
                object.personalSignature = message.personalSignature;
            if (message.clientConfigMd5 != null && message.hasOwnProperty("clientConfigMd5"))
                object.clientConfigMd5 = message.clientConfigMd5;
            if (message.maxGunValue != null && message.hasOwnProperty("maxGunValue"))
                if (typeof message.maxGunValue === "number")
                    object.maxGunValue = options.longs === String ? String(message.maxGunValue) : message.maxGunValue;
                else
                    object.maxGunValue = options.longs === String ? $util.Long.prototype.toString.call(message.maxGunValue) : options.longs === Number ? new $util.LongBits(message.maxGunValue.low >>> 0, message.maxGunValue.high >>> 0).toNumber() : message.maxGunValue;
            if (message.timeString != null && message.hasOwnProperty("timeString"))
                object.timeString = message.timeString;
            if (message.bankPasswordFlag != null && message.hasOwnProperty("bankPasswordFlag"))
                object.bankPasswordFlag = message.bankPasswordFlag;
            if (message.bankCurrency != null && message.hasOwnProperty("bankCurrency"))
                if (typeof message.bankCurrency === "number")
                    object.bankCurrency = options.longs === String ? String(message.bankCurrency) : message.bankCurrency;
                else
                    object.bankCurrency = options.longs === String ? $util.Long.prototype.toString.call(message.bankCurrency) : options.longs === Number ? new $util.LongBits(message.bankCurrency.low >>> 0, message.bankCurrency.high >>> 0).toNumber() : message.bankCurrency;
            if (message.lastGameId != null && message.hasOwnProperty("lastGameId"))
                object.lastGameId = message.lastGameId;
            if (message.lastRoomId != null && message.hasOwnProperty("lastRoomId"))
                object.lastRoomId = message.lastRoomId;
            if (message.headUrl != null && message.hasOwnProperty("headUrl"))
                object.headUrl = message.headUrl;
            if (message.maxStart != null && message.hasOwnProperty("maxStart"))
                object.maxStart = message.maxStart;
            if (message.agentServerList && message.agentServerList.length) {
                object.agentServerList = [];
                for (var j = 0; j < message.agentServerList.length; ++j)
                    object.agentServerList[j] = message.agentServerList[j];
            }
            if (message.gameKindList && message.gameKindList.length) {
                object.gameKindList = [];
                for (var j = 0; j < message.gameKindList.length; ++j)
                    object.gameKindList[j] = message.gameKindList[j];
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this LoginAck to JSON.
         * @function toJSON
         * @memberof CLGT.LoginAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginAck;
    })();

    CLGT.EmailSendCodeReq = (function() {

        /**
         * Properties of an EmailSendCodeReq.
         * @memberof CLGT
         * @interface IEmailSendCodeReq
         * @property {number|null} [intent] EmailSendCodeReq intent
         * @property {boolean|null} [haiWai] EmailSendCodeReq haiWai
         * @property {string|null} [email] EmailSendCodeReq email
         */

        /**
         * Constructs a new EmailSendCodeReq.
         * @memberof CLGT
         * @classdesc Represents an EmailSendCodeReq.
         * @implements IEmailSendCodeReq
         * @constructor
         * @param {CLGT.IEmailSendCodeReq=} [properties] Properties to set
         */
        function EmailSendCodeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EmailSendCodeReq intent.
         * @member {number} intent
         * @memberof CLGT.EmailSendCodeReq
         * @instance
         */
        EmailSendCodeReq.prototype.intent = 0;

        /**
         * EmailSendCodeReq haiWai.
         * @member {boolean} haiWai
         * @memberof CLGT.EmailSendCodeReq
         * @instance
         */
        EmailSendCodeReq.prototype.haiWai = false;

        /**
         * EmailSendCodeReq email.
         * @member {string} email
         * @memberof CLGT.EmailSendCodeReq
         * @instance
         */
        EmailSendCodeReq.prototype.email = "";

        /**
         * Creates a new EmailSendCodeReq instance using the specified properties.
         * @function create
         * @memberof CLGT.EmailSendCodeReq
         * @static
         * @param {CLGT.IEmailSendCodeReq=} [properties] Properties to set
         * @returns {CLGT.EmailSendCodeReq} EmailSendCodeReq instance
         */
        EmailSendCodeReq.create = function create(properties) {
            return new EmailSendCodeReq(properties);
        };

        /**
         * Encodes the specified EmailSendCodeReq message. Does not implicitly {@link CLGT.EmailSendCodeReq.verify|verify} messages.
         * @function encode
         * @memberof CLGT.EmailSendCodeReq
         * @static
         * @param {CLGT.IEmailSendCodeReq} message EmailSendCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmailSendCodeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.intent != null && Object.hasOwnProperty.call(message, "intent"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.intent);
            if (message.haiWai != null && Object.hasOwnProperty.call(message, "haiWai"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.haiWai);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified EmailSendCodeReq message, length delimited. Does not implicitly {@link CLGT.EmailSendCodeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.EmailSendCodeReq
         * @static
         * @param {CLGT.IEmailSendCodeReq} message EmailSendCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmailSendCodeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EmailSendCodeReq message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.EmailSendCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.EmailSendCodeReq} EmailSendCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmailSendCodeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.EmailSendCodeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.intent = reader.int32();
                    break;
                case 2:
                    message.haiWai = reader.bool();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EmailSendCodeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.EmailSendCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.EmailSendCodeReq} EmailSendCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmailSendCodeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmailSendCodeReq message.
         * @function verify
         * @memberof CLGT.EmailSendCodeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmailSendCodeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.intent != null && message.hasOwnProperty("intent"))
                if (!$util.isInteger(message.intent))
                    return "intent: integer expected";
            if (message.haiWai != null && message.hasOwnProperty("haiWai"))
                if (typeof message.haiWai !== "boolean")
                    return "haiWai: boolean expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates an EmailSendCodeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.EmailSendCodeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.EmailSendCodeReq} EmailSendCodeReq
         */
        EmailSendCodeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.EmailSendCodeReq)
                return object;
            var message = new $root.CLGT.EmailSendCodeReq();
            if (object.intent != null)
                message.intent = object.intent | 0;
            if (object.haiWai != null)
                message.haiWai = Boolean(object.haiWai);
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from an EmailSendCodeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.EmailSendCodeReq
         * @static
         * @param {CLGT.EmailSendCodeReq} message EmailSendCodeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmailSendCodeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.intent = 0;
                object.haiWai = false;
                object.email = "";
            }
            if (message.intent != null && message.hasOwnProperty("intent"))
                object.intent = message.intent;
            if (message.haiWai != null && message.hasOwnProperty("haiWai"))
                object.haiWai = message.haiWai;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this EmailSendCodeReq to JSON.
         * @function toJSON
         * @memberof CLGT.EmailSendCodeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmailSendCodeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EmailSendCodeReq;
    })();

    CLGT.EmailSendCodeAck = (function() {

        /**
         * Properties of an EmailSendCodeAck.
         * @memberof CLGT
         * @interface IEmailSendCodeAck
         * @property {number|null} [errcode] EmailSendCodeAck errcode
         */

        /**
         * Constructs a new EmailSendCodeAck.
         * @memberof CLGT
         * @classdesc Represents an EmailSendCodeAck.
         * @implements IEmailSendCodeAck
         * @constructor
         * @param {CLGT.IEmailSendCodeAck=} [properties] Properties to set
         */
        function EmailSendCodeAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EmailSendCodeAck errcode.
         * @member {number} errcode
         * @memberof CLGT.EmailSendCodeAck
         * @instance
         */
        EmailSendCodeAck.prototype.errcode = 0;

        /**
         * Creates a new EmailSendCodeAck instance using the specified properties.
         * @function create
         * @memberof CLGT.EmailSendCodeAck
         * @static
         * @param {CLGT.IEmailSendCodeAck=} [properties] Properties to set
         * @returns {CLGT.EmailSendCodeAck} EmailSendCodeAck instance
         */
        EmailSendCodeAck.create = function create(properties) {
            return new EmailSendCodeAck(properties);
        };

        /**
         * Encodes the specified EmailSendCodeAck message. Does not implicitly {@link CLGT.EmailSendCodeAck.verify|verify} messages.
         * @function encode
         * @memberof CLGT.EmailSendCodeAck
         * @static
         * @param {CLGT.IEmailSendCodeAck} message EmailSendCodeAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmailSendCodeAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && Object.hasOwnProperty.call(message, "errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            return writer;
        };

        /**
         * Encodes the specified EmailSendCodeAck message, length delimited. Does not implicitly {@link CLGT.EmailSendCodeAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.EmailSendCodeAck
         * @static
         * @param {CLGT.IEmailSendCodeAck} message EmailSendCodeAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmailSendCodeAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EmailSendCodeAck message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.EmailSendCodeAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.EmailSendCodeAck} EmailSendCodeAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmailSendCodeAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.EmailSendCodeAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EmailSendCodeAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.EmailSendCodeAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.EmailSendCodeAck} EmailSendCodeAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmailSendCodeAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmailSendCodeAck message.
         * @function verify
         * @memberof CLGT.EmailSendCodeAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmailSendCodeAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isInteger(message.errcode))
                    return "errcode: integer expected";
            return null;
        };

        /**
         * Creates an EmailSendCodeAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.EmailSendCodeAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.EmailSendCodeAck} EmailSendCodeAck
         */
        EmailSendCodeAck.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.EmailSendCodeAck)
                return object;
            var message = new $root.CLGT.EmailSendCodeAck();
            if (object.errcode != null)
                message.errcode = object.errcode | 0;
            return message;
        };

        /**
         * Creates a plain object from an EmailSendCodeAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.EmailSendCodeAck
         * @static
         * @param {CLGT.EmailSendCodeAck} message EmailSendCodeAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmailSendCodeAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errcode = 0;
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                object.errcode = message.errcode;
            return object;
        };

        /**
         * Converts this EmailSendCodeAck to JSON.
         * @function toJSON
         * @memberof CLGT.EmailSendCodeAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmailSendCodeAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EmailSendCodeAck;
    })();

    CLGT.PhoneSendCodeReq = (function() {

        /**
         * Properties of a PhoneSendCodeReq.
         * @memberof CLGT
         * @interface IPhoneSendCodeReq
         * @property {number|null} [intent] PhoneSendCodeReq intent
         * @property {string|null} [phone] PhoneSendCodeReq phone
         * @property {number|null} [smsChannel] PhoneSendCodeReq smsChannel
         */

        /**
         * Constructs a new PhoneSendCodeReq.
         * @memberof CLGT
         * @classdesc Represents a PhoneSendCodeReq.
         * @implements IPhoneSendCodeReq
         * @constructor
         * @param {CLGT.IPhoneSendCodeReq=} [properties] Properties to set
         */
        function PhoneSendCodeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PhoneSendCodeReq intent.
         * @member {number} intent
         * @memberof CLGT.PhoneSendCodeReq
         * @instance
         */
        PhoneSendCodeReq.prototype.intent = 0;

        /**
         * PhoneSendCodeReq phone.
         * @member {string} phone
         * @memberof CLGT.PhoneSendCodeReq
         * @instance
         */
        PhoneSendCodeReq.prototype.phone = "";

        /**
         * PhoneSendCodeReq smsChannel.
         * @member {number} smsChannel
         * @memberof CLGT.PhoneSendCodeReq
         * @instance
         */
        PhoneSendCodeReq.prototype.smsChannel = 0;

        /**
         * Creates a new PhoneSendCodeReq instance using the specified properties.
         * @function create
         * @memberof CLGT.PhoneSendCodeReq
         * @static
         * @param {CLGT.IPhoneSendCodeReq=} [properties] Properties to set
         * @returns {CLGT.PhoneSendCodeReq} PhoneSendCodeReq instance
         */
        PhoneSendCodeReq.create = function create(properties) {
            return new PhoneSendCodeReq(properties);
        };

        /**
         * Encodes the specified PhoneSendCodeReq message. Does not implicitly {@link CLGT.PhoneSendCodeReq.verify|verify} messages.
         * @function encode
         * @memberof CLGT.PhoneSendCodeReq
         * @static
         * @param {CLGT.IPhoneSendCodeReq} message PhoneSendCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneSendCodeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.intent != null && Object.hasOwnProperty.call(message, "intent"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.intent);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.phone);
            if (message.smsChannel != null && Object.hasOwnProperty.call(message, "smsChannel"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.smsChannel);
            return writer;
        };

        /**
         * Encodes the specified PhoneSendCodeReq message, length delimited. Does not implicitly {@link CLGT.PhoneSendCodeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.PhoneSendCodeReq
         * @static
         * @param {CLGT.IPhoneSendCodeReq} message PhoneSendCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneSendCodeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PhoneSendCodeReq message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.PhoneSendCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.PhoneSendCodeReq} PhoneSendCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneSendCodeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.PhoneSendCodeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.intent = reader.int32();
                    break;
                case 2:
                    message.phone = reader.string();
                    break;
                case 3:
                    message.smsChannel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PhoneSendCodeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.PhoneSendCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.PhoneSendCodeReq} PhoneSendCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneSendCodeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PhoneSendCodeReq message.
         * @function verify
         * @memberof CLGT.PhoneSendCodeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PhoneSendCodeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.intent != null && message.hasOwnProperty("intent"))
                if (!$util.isInteger(message.intent))
                    return "intent: integer expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.smsChannel != null && message.hasOwnProperty("smsChannel"))
                if (!$util.isInteger(message.smsChannel))
                    return "smsChannel: integer expected";
            return null;
        };

        /**
         * Creates a PhoneSendCodeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.PhoneSendCodeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.PhoneSendCodeReq} PhoneSendCodeReq
         */
        PhoneSendCodeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.PhoneSendCodeReq)
                return object;
            var message = new $root.CLGT.PhoneSendCodeReq();
            if (object.intent != null)
                message.intent = object.intent | 0;
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.smsChannel != null)
                message.smsChannel = object.smsChannel | 0;
            return message;
        };

        /**
         * Creates a plain object from a PhoneSendCodeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.PhoneSendCodeReq
         * @static
         * @param {CLGT.PhoneSendCodeReq} message PhoneSendCodeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PhoneSendCodeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.intent = 0;
                object.phone = "";
                object.smsChannel = 0;
            }
            if (message.intent != null && message.hasOwnProperty("intent"))
                object.intent = message.intent;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.smsChannel != null && message.hasOwnProperty("smsChannel"))
                object.smsChannel = message.smsChannel;
            return object;
        };

        /**
         * Converts this PhoneSendCodeReq to JSON.
         * @function toJSON
         * @memberof CLGT.PhoneSendCodeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PhoneSendCodeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PhoneSendCodeReq;
    })();

    CLGT.PhoneSendCodeAck = (function() {

        /**
         * Properties of a PhoneSendCodeAck.
         * @memberof CLGT
         * @interface IPhoneSendCodeAck
         * @property {number|null} [errcode] PhoneSendCodeAck errcode
         */

        /**
         * Constructs a new PhoneSendCodeAck.
         * @memberof CLGT
         * @classdesc Represents a PhoneSendCodeAck.
         * @implements IPhoneSendCodeAck
         * @constructor
         * @param {CLGT.IPhoneSendCodeAck=} [properties] Properties to set
         */
        function PhoneSendCodeAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PhoneSendCodeAck errcode.
         * @member {number} errcode
         * @memberof CLGT.PhoneSendCodeAck
         * @instance
         */
        PhoneSendCodeAck.prototype.errcode = 0;

        /**
         * Creates a new PhoneSendCodeAck instance using the specified properties.
         * @function create
         * @memberof CLGT.PhoneSendCodeAck
         * @static
         * @param {CLGT.IPhoneSendCodeAck=} [properties] Properties to set
         * @returns {CLGT.PhoneSendCodeAck} PhoneSendCodeAck instance
         */
        PhoneSendCodeAck.create = function create(properties) {
            return new PhoneSendCodeAck(properties);
        };

        /**
         * Encodes the specified PhoneSendCodeAck message. Does not implicitly {@link CLGT.PhoneSendCodeAck.verify|verify} messages.
         * @function encode
         * @memberof CLGT.PhoneSendCodeAck
         * @static
         * @param {CLGT.IPhoneSendCodeAck} message PhoneSendCodeAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneSendCodeAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && Object.hasOwnProperty.call(message, "errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            return writer;
        };

        /**
         * Encodes the specified PhoneSendCodeAck message, length delimited. Does not implicitly {@link CLGT.PhoneSendCodeAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.PhoneSendCodeAck
         * @static
         * @param {CLGT.IPhoneSendCodeAck} message PhoneSendCodeAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PhoneSendCodeAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PhoneSendCodeAck message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.PhoneSendCodeAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.PhoneSendCodeAck} PhoneSendCodeAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneSendCodeAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.PhoneSendCodeAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PhoneSendCodeAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.PhoneSendCodeAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.PhoneSendCodeAck} PhoneSendCodeAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PhoneSendCodeAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PhoneSendCodeAck message.
         * @function verify
         * @memberof CLGT.PhoneSendCodeAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PhoneSendCodeAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isInteger(message.errcode))
                    return "errcode: integer expected";
            return null;
        };

        /**
         * Creates a PhoneSendCodeAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.PhoneSendCodeAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.PhoneSendCodeAck} PhoneSendCodeAck
         */
        PhoneSendCodeAck.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.PhoneSendCodeAck)
                return object;
            var message = new $root.CLGT.PhoneSendCodeAck();
            if (object.errcode != null)
                message.errcode = object.errcode | 0;
            return message;
        };

        /**
         * Creates a plain object from a PhoneSendCodeAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.PhoneSendCodeAck
         * @static
         * @param {CLGT.PhoneSendCodeAck} message PhoneSendCodeAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PhoneSendCodeAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errcode = 0;
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                object.errcode = message.errcode;
            return object;
        };

        /**
         * Converts this PhoneSendCodeAck to JSON.
         * @function toJSON
         * @memberof CLGT.PhoneSendCodeAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PhoneSendCodeAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PhoneSendCodeAck;
    })();

    CLGT.CheckAccountExistReq = (function() {

        /**
         * Properties of a CheckAccountExistReq.
         * @memberof CLGT
         * @interface ICheckAccountExistReq
         * @property {string|null} [account] CheckAccountExistReq account
         */

        /**
         * Constructs a new CheckAccountExistReq.
         * @memberof CLGT
         * @classdesc Represents a CheckAccountExistReq.
         * @implements ICheckAccountExistReq
         * @constructor
         * @param {CLGT.ICheckAccountExistReq=} [properties] Properties to set
         */
        function CheckAccountExistReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckAccountExistReq account.
         * @member {string} account
         * @memberof CLGT.CheckAccountExistReq
         * @instance
         */
        CheckAccountExistReq.prototype.account = "";

        /**
         * Creates a new CheckAccountExistReq instance using the specified properties.
         * @function create
         * @memberof CLGT.CheckAccountExistReq
         * @static
         * @param {CLGT.ICheckAccountExistReq=} [properties] Properties to set
         * @returns {CLGT.CheckAccountExistReq} CheckAccountExistReq instance
         */
        CheckAccountExistReq.create = function create(properties) {
            return new CheckAccountExistReq(properties);
        };

        /**
         * Encodes the specified CheckAccountExistReq message. Does not implicitly {@link CLGT.CheckAccountExistReq.verify|verify} messages.
         * @function encode
         * @memberof CLGT.CheckAccountExistReq
         * @static
         * @param {CLGT.ICheckAccountExistReq} message CheckAccountExistReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckAccountExistReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            return writer;
        };

        /**
         * Encodes the specified CheckAccountExistReq message, length delimited. Does not implicitly {@link CLGT.CheckAccountExistReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.CheckAccountExistReq
         * @static
         * @param {CLGT.ICheckAccountExistReq} message CheckAccountExistReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckAccountExistReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckAccountExistReq message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.CheckAccountExistReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.CheckAccountExistReq} CheckAccountExistReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckAccountExistReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.CheckAccountExistReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckAccountExistReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.CheckAccountExistReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.CheckAccountExistReq} CheckAccountExistReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckAccountExistReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckAccountExistReq message.
         * @function verify
         * @memberof CLGT.CheckAccountExistReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckAccountExistReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            return null;
        };

        /**
         * Creates a CheckAccountExistReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.CheckAccountExistReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.CheckAccountExistReq} CheckAccountExistReq
         */
        CheckAccountExistReq.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.CheckAccountExistReq)
                return object;
            var message = new $root.CLGT.CheckAccountExistReq();
            if (object.account != null)
                message.account = String(object.account);
            return message;
        };

        /**
         * Creates a plain object from a CheckAccountExistReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.CheckAccountExistReq
         * @static
         * @param {CLGT.CheckAccountExistReq} message CheckAccountExistReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckAccountExistReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.account = "";
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            return object;
        };

        /**
         * Converts this CheckAccountExistReq to JSON.
         * @function toJSON
         * @memberof CLGT.CheckAccountExistReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckAccountExistReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckAccountExistReq;
    })();

    CLGT.CheckAccountExistAck = (function() {

        /**
         * Properties of a CheckAccountExistAck.
         * @memberof CLGT
         * @interface ICheckAccountExistAck
         * @property {number|null} [errcode] CheckAccountExistAck errcode
         * @property {boolean|null} [isExist] CheckAccountExistAck isExist
         */

        /**
         * Constructs a new CheckAccountExistAck.
         * @memberof CLGT
         * @classdesc Represents a CheckAccountExistAck.
         * @implements ICheckAccountExistAck
         * @constructor
         * @param {CLGT.ICheckAccountExistAck=} [properties] Properties to set
         */
        function CheckAccountExistAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckAccountExistAck errcode.
         * @member {number} errcode
         * @memberof CLGT.CheckAccountExistAck
         * @instance
         */
        CheckAccountExistAck.prototype.errcode = 0;

        /**
         * CheckAccountExistAck isExist.
         * @member {boolean} isExist
         * @memberof CLGT.CheckAccountExistAck
         * @instance
         */
        CheckAccountExistAck.prototype.isExist = false;

        /**
         * Creates a new CheckAccountExistAck instance using the specified properties.
         * @function create
         * @memberof CLGT.CheckAccountExistAck
         * @static
         * @param {CLGT.ICheckAccountExistAck=} [properties] Properties to set
         * @returns {CLGT.CheckAccountExistAck} CheckAccountExistAck instance
         */
        CheckAccountExistAck.create = function create(properties) {
            return new CheckAccountExistAck(properties);
        };

        /**
         * Encodes the specified CheckAccountExistAck message. Does not implicitly {@link CLGT.CheckAccountExistAck.verify|verify} messages.
         * @function encode
         * @memberof CLGT.CheckAccountExistAck
         * @static
         * @param {CLGT.ICheckAccountExistAck} message CheckAccountExistAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckAccountExistAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && Object.hasOwnProperty.call(message, "errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            if (message.isExist != null && Object.hasOwnProperty.call(message, "isExist"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExist);
            return writer;
        };

        /**
         * Encodes the specified CheckAccountExistAck message, length delimited. Does not implicitly {@link CLGT.CheckAccountExistAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.CheckAccountExistAck
         * @static
         * @param {CLGT.ICheckAccountExistAck} message CheckAccountExistAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckAccountExistAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckAccountExistAck message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.CheckAccountExistAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.CheckAccountExistAck} CheckAccountExistAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckAccountExistAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.CheckAccountExistAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                case 2:
                    message.isExist = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckAccountExistAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.CheckAccountExistAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.CheckAccountExistAck} CheckAccountExistAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckAccountExistAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckAccountExistAck message.
         * @function verify
         * @memberof CLGT.CheckAccountExistAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckAccountExistAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isInteger(message.errcode))
                    return "errcode: integer expected";
            if (message.isExist != null && message.hasOwnProperty("isExist"))
                if (typeof message.isExist !== "boolean")
                    return "isExist: boolean expected";
            return null;
        };

        /**
         * Creates a CheckAccountExistAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.CheckAccountExistAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.CheckAccountExistAck} CheckAccountExistAck
         */
        CheckAccountExistAck.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.CheckAccountExistAck)
                return object;
            var message = new $root.CLGT.CheckAccountExistAck();
            if (object.errcode != null)
                message.errcode = object.errcode | 0;
            if (object.isExist != null)
                message.isExist = Boolean(object.isExist);
            return message;
        };

        /**
         * Creates a plain object from a CheckAccountExistAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.CheckAccountExistAck
         * @static
         * @param {CLGT.CheckAccountExistAck} message CheckAccountExistAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckAccountExistAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errcode = 0;
                object.isExist = false;
            }
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                object.errcode = message.errcode;
            if (message.isExist != null && message.hasOwnProperty("isExist"))
                object.isExist = message.isExist;
            return object;
        };

        /**
         * Converts this CheckAccountExistAck to JSON.
         * @function toJSON
         * @memberof CLGT.CheckAccountExistAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckAccountExistAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckAccountExistAck;
    })();

    CLGT.AccountRegisterReq = (function() {

        /**
         * Properties of an AccountRegisterReq.
         * @memberof CLGT
         * @interface IAccountRegisterReq
         * @property {string|null} [account] AccountRegisterReq account
         * @property {string|null} [password] AccountRegisterReq password
         * @property {string|null} [phone] AccountRegisterReq phone
         * @property {string|null} [email] AccountRegisterReq email
         * @property {string|null} [code] AccountRegisterReq code
         * @property {number|null} [platform] AccountRegisterReq platform
         * @property {string|null} [device] AccountRegisterReq device
         * @property {number|null} [channel] AccountRegisterReq channel
         * @property {string|null} [nickname] AccountRegisterReq nickname
         */

        /**
         * Constructs a new AccountRegisterReq.
         * @memberof CLGT
         * @classdesc Represents an AccountRegisterReq.
         * @implements IAccountRegisterReq
         * @constructor
         * @param {CLGT.IAccountRegisterReq=} [properties] Properties to set
         */
        function AccountRegisterReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountRegisterReq account.
         * @member {string} account
         * @memberof CLGT.AccountRegisterReq
         * @instance
         */
        AccountRegisterReq.prototype.account = "";

        /**
         * AccountRegisterReq password.
         * @member {string} password
         * @memberof CLGT.AccountRegisterReq
         * @instance
         */
        AccountRegisterReq.prototype.password = "";

        /**
         * AccountRegisterReq phone.
         * @member {string} phone
         * @memberof CLGT.AccountRegisterReq
         * @instance
         */
        AccountRegisterReq.prototype.phone = "";

        /**
         * AccountRegisterReq email.
         * @member {string} email
         * @memberof CLGT.AccountRegisterReq
         * @instance
         */
        AccountRegisterReq.prototype.email = "";

        /**
         * AccountRegisterReq code.
         * @member {string} code
         * @memberof CLGT.AccountRegisterReq
         * @instance
         */
        AccountRegisterReq.prototype.code = "";

        /**
         * AccountRegisterReq platform.
         * @member {number} platform
         * @memberof CLGT.AccountRegisterReq
         * @instance
         */
        AccountRegisterReq.prototype.platform = 0;

        /**
         * AccountRegisterReq device.
         * @member {string} device
         * @memberof CLGT.AccountRegisterReq
         * @instance
         */
        AccountRegisterReq.prototype.device = "";

        /**
         * AccountRegisterReq channel.
         * @member {number} channel
         * @memberof CLGT.AccountRegisterReq
         * @instance
         */
        AccountRegisterReq.prototype.channel = 0;

        /**
         * AccountRegisterReq nickname.
         * @member {string} nickname
         * @memberof CLGT.AccountRegisterReq
         * @instance
         */
        AccountRegisterReq.prototype.nickname = "";

        /**
         * Creates a new AccountRegisterReq instance using the specified properties.
         * @function create
         * @memberof CLGT.AccountRegisterReq
         * @static
         * @param {CLGT.IAccountRegisterReq=} [properties] Properties to set
         * @returns {CLGT.AccountRegisterReq} AccountRegisterReq instance
         */
        AccountRegisterReq.create = function create(properties) {
            return new AccountRegisterReq(properties);
        };

        /**
         * Encodes the specified AccountRegisterReq message. Does not implicitly {@link CLGT.AccountRegisterReq.verify|verify} messages.
         * @function encode
         * @memberof CLGT.AccountRegisterReq
         * @static
         * @param {CLGT.IAccountRegisterReq} message AccountRegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountRegisterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.phone);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.code);
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.platform);
            if (message.device != null && Object.hasOwnProperty.call(message, "device"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.device);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.channel);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified AccountRegisterReq message, length delimited. Does not implicitly {@link CLGT.AccountRegisterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.AccountRegisterReq
         * @static
         * @param {CLGT.IAccountRegisterReq} message AccountRegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountRegisterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountRegisterReq message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.AccountRegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.AccountRegisterReq} AccountRegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountRegisterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.AccountRegisterReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.phone = reader.string();
                    break;
                case 4:
                    message.email = reader.string();
                    break;
                case 5:
                    message.code = reader.string();
                    break;
                case 6:
                    message.platform = reader.int32();
                    break;
                case 7:
                    message.device = reader.string();
                    break;
                case 8:
                    message.channel = reader.int32();
                    break;
                case 9:
                    message.nickname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountRegisterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.AccountRegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.AccountRegisterReq} AccountRegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountRegisterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountRegisterReq message.
         * @function verify
         * @memberof CLGT.AccountRegisterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountRegisterReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                if (!$util.isInteger(message.platform))
                    return "platform: integer expected";
            if (message.device != null && message.hasOwnProperty("device"))
                if (!$util.isString(message.device))
                    return "device: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isInteger(message.channel))
                    return "channel: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates an AccountRegisterReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.AccountRegisterReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.AccountRegisterReq} AccountRegisterReq
         */
        AccountRegisterReq.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.AccountRegisterReq)
                return object;
            var message = new $root.CLGT.AccountRegisterReq();
            if (object.account != null)
                message.account = String(object.account);
            if (object.password != null)
                message.password = String(object.password);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.email != null)
                message.email = String(object.email);
            if (object.code != null)
                message.code = String(object.code);
            if (object.platform != null)
                message.platform = object.platform | 0;
            if (object.device != null)
                message.device = String(object.device);
            if (object.channel != null)
                message.channel = object.channel | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from an AccountRegisterReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.AccountRegisterReq
         * @static
         * @param {CLGT.AccountRegisterReq} message AccountRegisterReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountRegisterReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.password = "";
                object.phone = "";
                object.email = "";
                object.code = "";
                object.platform = 0;
                object.device = "";
                object.channel = 0;
                object.nickname = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            if (message.device != null && message.hasOwnProperty("device"))
                object.device = message.device;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this AccountRegisterReq to JSON.
         * @function toJSON
         * @memberof CLGT.AccountRegisterReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountRegisterReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountRegisterReq;
    })();

    CLGT.AccountRegisterAck = (function() {

        /**
         * Properties of an AccountRegisterAck.
         * @memberof CLGT
         * @interface IAccountRegisterAck
         * @property {number|null} [errcode] AccountRegisterAck errcode
         * @property {number|null} [userId] AccountRegisterAck userId
         * @property {string|null} [nickname] AccountRegisterAck nickname
         * @property {number|null} [head] AccountRegisterAck head
         * @property {number|null} [headFrame] AccountRegisterAck headFrame
         */

        /**
         * Constructs a new AccountRegisterAck.
         * @memberof CLGT
         * @classdesc Represents an AccountRegisterAck.
         * @implements IAccountRegisterAck
         * @constructor
         * @param {CLGT.IAccountRegisterAck=} [properties] Properties to set
         */
        function AccountRegisterAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountRegisterAck errcode.
         * @member {number} errcode
         * @memberof CLGT.AccountRegisterAck
         * @instance
         */
        AccountRegisterAck.prototype.errcode = 0;

        /**
         * AccountRegisterAck userId.
         * @member {number} userId
         * @memberof CLGT.AccountRegisterAck
         * @instance
         */
        AccountRegisterAck.prototype.userId = 0;

        /**
         * AccountRegisterAck nickname.
         * @member {string} nickname
         * @memberof CLGT.AccountRegisterAck
         * @instance
         */
        AccountRegisterAck.prototype.nickname = "";

        /**
         * AccountRegisterAck head.
         * @member {number} head
         * @memberof CLGT.AccountRegisterAck
         * @instance
         */
        AccountRegisterAck.prototype.head = 0;

        /**
         * AccountRegisterAck headFrame.
         * @member {number} headFrame
         * @memberof CLGT.AccountRegisterAck
         * @instance
         */
        AccountRegisterAck.prototype.headFrame = 0;

        /**
         * Creates a new AccountRegisterAck instance using the specified properties.
         * @function create
         * @memberof CLGT.AccountRegisterAck
         * @static
         * @param {CLGT.IAccountRegisterAck=} [properties] Properties to set
         * @returns {CLGT.AccountRegisterAck} AccountRegisterAck instance
         */
        AccountRegisterAck.create = function create(properties) {
            return new AccountRegisterAck(properties);
        };

        /**
         * Encodes the specified AccountRegisterAck message. Does not implicitly {@link CLGT.AccountRegisterAck.verify|verify} messages.
         * @function encode
         * @memberof CLGT.AccountRegisterAck
         * @static
         * @param {CLGT.IAccountRegisterAck} message AccountRegisterAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountRegisterAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && Object.hasOwnProperty.call(message, "errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.head);
            if (message.headFrame != null && Object.hasOwnProperty.call(message, "headFrame"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.headFrame);
            return writer;
        };

        /**
         * Encodes the specified AccountRegisterAck message, length delimited. Does not implicitly {@link CLGT.AccountRegisterAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.AccountRegisterAck
         * @static
         * @param {CLGT.IAccountRegisterAck} message AccountRegisterAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountRegisterAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountRegisterAck message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.AccountRegisterAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.AccountRegisterAck} AccountRegisterAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountRegisterAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.AccountRegisterAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int32();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.head = reader.int32();
                    break;
                case 5:
                    message.headFrame = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountRegisterAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.AccountRegisterAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.AccountRegisterAck} AccountRegisterAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountRegisterAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountRegisterAck message.
         * @function verify
         * @memberof CLGT.AccountRegisterAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountRegisterAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isInteger(message.errcode))
                    return "errcode: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.head != null && message.hasOwnProperty("head"))
                if (!$util.isInteger(message.head))
                    return "head: integer expected";
            if (message.headFrame != null && message.hasOwnProperty("headFrame"))
                if (!$util.isInteger(message.headFrame))
                    return "headFrame: integer expected";
            return null;
        };

        /**
         * Creates an AccountRegisterAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.AccountRegisterAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.AccountRegisterAck} AccountRegisterAck
         */
        AccountRegisterAck.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.AccountRegisterAck)
                return object;
            var message = new $root.CLGT.AccountRegisterAck();
            if (object.errcode != null)
                message.errcode = object.errcode | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.head != null)
                message.head = object.head | 0;
            if (object.headFrame != null)
                message.headFrame = object.headFrame | 0;
            return message;
        };

        /**
         * Creates a plain object from an AccountRegisterAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.AccountRegisterAck
         * @static
         * @param {CLGT.AccountRegisterAck} message AccountRegisterAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountRegisterAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errcode = 0;
                object.userId = 0;
                object.nickname = "";
                object.head = 0;
                object.headFrame = 0;
            }
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                object.errcode = message.errcode;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = message.head;
            if (message.headFrame != null && message.hasOwnProperty("headFrame"))
                object.headFrame = message.headFrame;
            return object;
        };

        /**
         * Converts this AccountRegisterAck to JSON.
         * @function toJSON
         * @memberof CLGT.AccountRegisterAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountRegisterAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountRegisterAck;
    })();

    CLGT.AccountResetPasswordReq = (function() {

        /**
         * Properties of an AccountResetPasswordReq.
         * @memberof CLGT
         * @interface IAccountResetPasswordReq
         * @property {string|null} [account] AccountResetPasswordReq account
         * @property {string|null} [newPassword] AccountResetPasswordReq newPassword
         * @property {string|null} [phone] AccountResetPasswordReq phone
         * @property {string|null} [email] AccountResetPasswordReq email
         * @property {string|null} [code] AccountResetPasswordReq code
         */

        /**
         * Constructs a new AccountResetPasswordReq.
         * @memberof CLGT
         * @classdesc Represents an AccountResetPasswordReq.
         * @implements IAccountResetPasswordReq
         * @constructor
         * @param {CLGT.IAccountResetPasswordReq=} [properties] Properties to set
         */
        function AccountResetPasswordReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountResetPasswordReq account.
         * @member {string} account
         * @memberof CLGT.AccountResetPasswordReq
         * @instance
         */
        AccountResetPasswordReq.prototype.account = "";

        /**
         * AccountResetPasswordReq newPassword.
         * @member {string} newPassword
         * @memberof CLGT.AccountResetPasswordReq
         * @instance
         */
        AccountResetPasswordReq.prototype.newPassword = "";

        /**
         * AccountResetPasswordReq phone.
         * @member {string} phone
         * @memberof CLGT.AccountResetPasswordReq
         * @instance
         */
        AccountResetPasswordReq.prototype.phone = "";

        /**
         * AccountResetPasswordReq email.
         * @member {string} email
         * @memberof CLGT.AccountResetPasswordReq
         * @instance
         */
        AccountResetPasswordReq.prototype.email = "";

        /**
         * AccountResetPasswordReq code.
         * @member {string} code
         * @memberof CLGT.AccountResetPasswordReq
         * @instance
         */
        AccountResetPasswordReq.prototype.code = "";

        /**
         * Creates a new AccountResetPasswordReq instance using the specified properties.
         * @function create
         * @memberof CLGT.AccountResetPasswordReq
         * @static
         * @param {CLGT.IAccountResetPasswordReq=} [properties] Properties to set
         * @returns {CLGT.AccountResetPasswordReq} AccountResetPasswordReq instance
         */
        AccountResetPasswordReq.create = function create(properties) {
            return new AccountResetPasswordReq(properties);
        };

        /**
         * Encodes the specified AccountResetPasswordReq message. Does not implicitly {@link CLGT.AccountResetPasswordReq.verify|verify} messages.
         * @function encode
         * @memberof CLGT.AccountResetPasswordReq
         * @static
         * @param {CLGT.IAccountResetPasswordReq} message AccountResetPasswordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountResetPasswordReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.newPassword != null && Object.hasOwnProperty.call(message, "newPassword"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.newPassword);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.phone);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.email);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified AccountResetPasswordReq message, length delimited. Does not implicitly {@link CLGT.AccountResetPasswordReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.AccountResetPasswordReq
         * @static
         * @param {CLGT.IAccountResetPasswordReq} message AccountResetPasswordReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountResetPasswordReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountResetPasswordReq message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.AccountResetPasswordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.AccountResetPasswordReq} AccountResetPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountResetPasswordReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.AccountResetPasswordReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.newPassword = reader.string();
                    break;
                case 3:
                    message.phone = reader.string();
                    break;
                case 4:
                    message.email = reader.string();
                    break;
                case 5:
                    message.code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountResetPasswordReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.AccountResetPasswordReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.AccountResetPasswordReq} AccountResetPasswordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountResetPasswordReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountResetPasswordReq message.
         * @function verify
         * @memberof CLGT.AccountResetPasswordReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountResetPasswordReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                if (!$util.isString(message.newPassword))
                    return "newPassword: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates an AccountResetPasswordReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.AccountResetPasswordReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.AccountResetPasswordReq} AccountResetPasswordReq
         */
        AccountResetPasswordReq.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.AccountResetPasswordReq)
                return object;
            var message = new $root.CLGT.AccountResetPasswordReq();
            if (object.account != null)
                message.account = String(object.account);
            if (object.newPassword != null)
                message.newPassword = String(object.newPassword);
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.email != null)
                message.email = String(object.email);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from an AccountResetPasswordReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.AccountResetPasswordReq
         * @static
         * @param {CLGT.AccountResetPasswordReq} message AccountResetPasswordReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountResetPasswordReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.newPassword = "";
                object.phone = "";
                object.email = "";
                object.code = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.newPassword != null && message.hasOwnProperty("newPassword"))
                object.newPassword = message.newPassword;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this AccountResetPasswordReq to JSON.
         * @function toJSON
         * @memberof CLGT.AccountResetPasswordReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountResetPasswordReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountResetPasswordReq;
    })();

    CLGT.AccountResetPasswordAck = (function() {

        /**
         * Properties of an AccountResetPasswordAck.
         * @memberof CLGT
         * @interface IAccountResetPasswordAck
         * @property {number|null} [errcode] AccountResetPasswordAck errcode
         */

        /**
         * Constructs a new AccountResetPasswordAck.
         * @memberof CLGT
         * @classdesc Represents an AccountResetPasswordAck.
         * @implements IAccountResetPasswordAck
         * @constructor
         * @param {CLGT.IAccountResetPasswordAck=} [properties] Properties to set
         */
        function AccountResetPasswordAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountResetPasswordAck errcode.
         * @member {number} errcode
         * @memberof CLGT.AccountResetPasswordAck
         * @instance
         */
        AccountResetPasswordAck.prototype.errcode = 0;

        /**
         * Creates a new AccountResetPasswordAck instance using the specified properties.
         * @function create
         * @memberof CLGT.AccountResetPasswordAck
         * @static
         * @param {CLGT.IAccountResetPasswordAck=} [properties] Properties to set
         * @returns {CLGT.AccountResetPasswordAck} AccountResetPasswordAck instance
         */
        AccountResetPasswordAck.create = function create(properties) {
            return new AccountResetPasswordAck(properties);
        };

        /**
         * Encodes the specified AccountResetPasswordAck message. Does not implicitly {@link CLGT.AccountResetPasswordAck.verify|verify} messages.
         * @function encode
         * @memberof CLGT.AccountResetPasswordAck
         * @static
         * @param {CLGT.IAccountResetPasswordAck} message AccountResetPasswordAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountResetPasswordAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && Object.hasOwnProperty.call(message, "errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            return writer;
        };

        /**
         * Encodes the specified AccountResetPasswordAck message, length delimited. Does not implicitly {@link CLGT.AccountResetPasswordAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.AccountResetPasswordAck
         * @static
         * @param {CLGT.IAccountResetPasswordAck} message AccountResetPasswordAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountResetPasswordAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountResetPasswordAck message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.AccountResetPasswordAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.AccountResetPasswordAck} AccountResetPasswordAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountResetPasswordAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.AccountResetPasswordAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountResetPasswordAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.AccountResetPasswordAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.AccountResetPasswordAck} AccountResetPasswordAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountResetPasswordAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountResetPasswordAck message.
         * @function verify
         * @memberof CLGT.AccountResetPasswordAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountResetPasswordAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isInteger(message.errcode))
                    return "errcode: integer expected";
            return null;
        };

        /**
         * Creates an AccountResetPasswordAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.AccountResetPasswordAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.AccountResetPasswordAck} AccountResetPasswordAck
         */
        AccountResetPasswordAck.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.AccountResetPasswordAck)
                return object;
            var message = new $root.CLGT.AccountResetPasswordAck();
            if (object.errcode != null)
                message.errcode = object.errcode | 0;
            return message;
        };

        /**
         * Creates a plain object from an AccountResetPasswordAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.AccountResetPasswordAck
         * @static
         * @param {CLGT.AccountResetPasswordAck} message AccountResetPasswordAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountResetPasswordAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errcode = 0;
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                object.errcode = message.errcode;
            return object;
        };

        /**
         * Converts this AccountResetPasswordAck to JSON.
         * @function toJSON
         * @memberof CLGT.AccountResetPasswordAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountResetPasswordAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountResetPasswordAck;
    })();

    CLGT.KeepAliveReq = (function() {

        /**
         * Properties of a KeepAliveReq.
         * @memberof CLGT
         * @interface IKeepAliveReq
         */

        /**
         * Constructs a new KeepAliveReq.
         * @memberof CLGT
         * @classdesc Represents a KeepAliveReq.
         * @implements IKeepAliveReq
         * @constructor
         * @param {CLGT.IKeepAliveReq=} [properties] Properties to set
         */
        function KeepAliveReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new KeepAliveReq instance using the specified properties.
         * @function create
         * @memberof CLGT.KeepAliveReq
         * @static
         * @param {CLGT.IKeepAliveReq=} [properties] Properties to set
         * @returns {CLGT.KeepAliveReq} KeepAliveReq instance
         */
        KeepAliveReq.create = function create(properties) {
            return new KeepAliveReq(properties);
        };

        /**
         * Encodes the specified KeepAliveReq message. Does not implicitly {@link CLGT.KeepAliveReq.verify|verify} messages.
         * @function encode
         * @memberof CLGT.KeepAliveReq
         * @static
         * @param {CLGT.IKeepAliveReq} message KeepAliveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepAliveReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified KeepAliveReq message, length delimited. Does not implicitly {@link CLGT.KeepAliveReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.KeepAliveReq
         * @static
         * @param {CLGT.IKeepAliveReq} message KeepAliveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepAliveReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeepAliveReq message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.KeepAliveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.KeepAliveReq} KeepAliveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepAliveReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.KeepAliveReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KeepAliveReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.KeepAliveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.KeepAliveReq} KeepAliveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepAliveReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeepAliveReq message.
         * @function verify
         * @memberof CLGT.KeepAliveReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeepAliveReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a KeepAliveReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.KeepAliveReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.KeepAliveReq} KeepAliveReq
         */
        KeepAliveReq.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.KeepAliveReq)
                return object;
            return new $root.CLGT.KeepAliveReq();
        };

        /**
         * Creates a plain object from a KeepAliveReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.KeepAliveReq
         * @static
         * @param {CLGT.KeepAliveReq} message KeepAliveReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeepAliveReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this KeepAliveReq to JSON.
         * @function toJSON
         * @memberof CLGT.KeepAliveReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeepAliveReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KeepAliveReq;
    })();

    CLGT.KeepAliveAck = (function() {

        /**
         * Properties of a KeepAliveAck.
         * @memberof CLGT
         * @interface IKeepAliveAck
         * @property {number|null} [errcode] KeepAliveAck errcode
         */

        /**
         * Constructs a new KeepAliveAck.
         * @memberof CLGT
         * @classdesc Represents a KeepAliveAck.
         * @implements IKeepAliveAck
         * @constructor
         * @param {CLGT.IKeepAliveAck=} [properties] Properties to set
         */
        function KeepAliveAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeepAliveAck errcode.
         * @member {number} errcode
         * @memberof CLGT.KeepAliveAck
         * @instance
         */
        KeepAliveAck.prototype.errcode = 0;

        /**
         * Creates a new KeepAliveAck instance using the specified properties.
         * @function create
         * @memberof CLGT.KeepAliveAck
         * @static
         * @param {CLGT.IKeepAliveAck=} [properties] Properties to set
         * @returns {CLGT.KeepAliveAck} KeepAliveAck instance
         */
        KeepAliveAck.create = function create(properties) {
            return new KeepAliveAck(properties);
        };

        /**
         * Encodes the specified KeepAliveAck message. Does not implicitly {@link CLGT.KeepAliveAck.verify|verify} messages.
         * @function encode
         * @memberof CLGT.KeepAliveAck
         * @static
         * @param {CLGT.IKeepAliveAck} message KeepAliveAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepAliveAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && Object.hasOwnProperty.call(message, "errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            return writer;
        };

        /**
         * Encodes the specified KeepAliveAck message, length delimited. Does not implicitly {@link CLGT.KeepAliveAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.KeepAliveAck
         * @static
         * @param {CLGT.IKeepAliveAck} message KeepAliveAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeepAliveAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeepAliveAck message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.KeepAliveAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.KeepAliveAck} KeepAliveAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepAliveAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.KeepAliveAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KeepAliveAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.KeepAliveAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.KeepAliveAck} KeepAliveAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeepAliveAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeepAliveAck message.
         * @function verify
         * @memberof CLGT.KeepAliveAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeepAliveAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isInteger(message.errcode))
                    return "errcode: integer expected";
            return null;
        };

        /**
         * Creates a KeepAliveAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.KeepAliveAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.KeepAliveAck} KeepAliveAck
         */
        KeepAliveAck.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.KeepAliveAck)
                return object;
            var message = new $root.CLGT.KeepAliveAck();
            if (object.errcode != null)
                message.errcode = object.errcode | 0;
            return message;
        };

        /**
         * Creates a plain object from a KeepAliveAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.KeepAliveAck
         * @static
         * @param {CLGT.KeepAliveAck} message KeepAliveAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeepAliveAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errcode = 0;
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                object.errcode = message.errcode;
            return object;
        };

        /**
         * Converts this KeepAliveAck to JSON.
         * @function toJSON
         * @memberof CLGT.KeepAliveAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeepAliveAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return KeepAliveAck;
    })();

    CLGT.TestNetInterruptRpt = (function() {

        /**
         * Properties of a TestNetInterruptRpt.
         * @memberof CLGT
         * @interface ITestNetInterruptRpt
         */

        /**
         * Constructs a new TestNetInterruptRpt.
         * @memberof CLGT
         * @classdesc Represents a TestNetInterruptRpt.
         * @implements ITestNetInterruptRpt
         * @constructor
         * @param {CLGT.ITestNetInterruptRpt=} [properties] Properties to set
         */
        function TestNetInterruptRpt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new TestNetInterruptRpt instance using the specified properties.
         * @function create
         * @memberof CLGT.TestNetInterruptRpt
         * @static
         * @param {CLGT.ITestNetInterruptRpt=} [properties] Properties to set
         * @returns {CLGT.TestNetInterruptRpt} TestNetInterruptRpt instance
         */
        TestNetInterruptRpt.create = function create(properties) {
            return new TestNetInterruptRpt(properties);
        };

        /**
         * Encodes the specified TestNetInterruptRpt message. Does not implicitly {@link CLGT.TestNetInterruptRpt.verify|verify} messages.
         * @function encode
         * @memberof CLGT.TestNetInterruptRpt
         * @static
         * @param {CLGT.ITestNetInterruptRpt} message TestNetInterruptRpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestNetInterruptRpt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TestNetInterruptRpt message, length delimited. Does not implicitly {@link CLGT.TestNetInterruptRpt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CLGT.TestNetInterruptRpt
         * @static
         * @param {CLGT.ITestNetInterruptRpt} message TestNetInterruptRpt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestNetInterruptRpt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestNetInterruptRpt message from the specified reader or buffer.
         * @function decode
         * @memberof CLGT.TestNetInterruptRpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CLGT.TestNetInterruptRpt} TestNetInterruptRpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestNetInterruptRpt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CLGT.TestNetInterruptRpt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestNetInterruptRpt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CLGT.TestNetInterruptRpt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CLGT.TestNetInterruptRpt} TestNetInterruptRpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestNetInterruptRpt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestNetInterruptRpt message.
         * @function verify
         * @memberof CLGT.TestNetInterruptRpt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestNetInterruptRpt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a TestNetInterruptRpt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CLGT.TestNetInterruptRpt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CLGT.TestNetInterruptRpt} TestNetInterruptRpt
         */
        TestNetInterruptRpt.fromObject = function fromObject(object) {
            if (object instanceof $root.CLGT.TestNetInterruptRpt)
                return object;
            return new $root.CLGT.TestNetInterruptRpt();
        };

        /**
         * Creates a plain object from a TestNetInterruptRpt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CLGT.TestNetInterruptRpt
         * @static
         * @param {CLGT.TestNetInterruptRpt} message TestNetInterruptRpt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestNetInterruptRpt.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TestNetInterruptRpt to JSON.
         * @function toJSON
         * @memberof CLGT.TestNetInterruptRpt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestNetInterruptRpt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestNetInterruptRpt;
    })();

    return CLGT;
})();


// module.exports = $root;
