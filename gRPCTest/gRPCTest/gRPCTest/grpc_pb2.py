# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: grpc.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='grpc.proto',
  package='Arithmetic',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\ngrpc.proto\x12\nArithmetic\"\x07\n\x05\x45mpty\"a\n\x06Player\x12*\n\x04\x64\x61ta\x18\x01 \x03(\x0b\x32\x1c.Arithmetic.Player.DataEntry\x1a+\n\tDataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x03:\x02\x38\x01\"u\n\x07Request\x12\x11\n\tPrizePool\x18\x01 \x01(\x03\x12\r\n\x05Round\x18\x02 \x01(\x05\x12 \n\x05poker\x18\x04 \x01(\x0b\x32\x11.Arithmetic.Poker\x12&\n\nPlayerList\x18\x05 \x03(\x0b\x32\x12.Arithmetic.Player\"5\n\x05Reply\x12\x16\n\x0ezhuangCardList\x18\x01 \x03(\x05\x12\x14\n\x0cxianCardList\x18\x02 \x03(\x05\"\x16\n\x05Poker\x12\r\n\x05\x63\x61rds\x18\x01 \x03(\x05\x32i\n\x03\x42JL\x12\x30\n\x06Handle\x12\x13.Arithmetic.Request\x1a\x11.Arithmetic.Reply\x12\x30\n\x08NewPoker\x12\x11.Arithmetic.Empty\x1a\x11.Arithmetic.Pokerb\x06proto3'
)




_EMPTY = _descriptor.Descriptor(
  name='Empty',
  full_name='Arithmetic.Empty',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=26,
  serialized_end=33,
)


_PLAYER_DATAENTRY = _descriptor.Descriptor(
  name='DataEntry',
  full_name='Arithmetic.Player.DataEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='Arithmetic.Player.DataEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='Arithmetic.Player.DataEntry.value', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=89,
  serialized_end=132,
)

_PLAYER = _descriptor.Descriptor(
  name='Player',
  full_name='Arithmetic.Player',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='Arithmetic.Player.data', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_PLAYER_DATAENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=35,
  serialized_end=132,
)


_REQUEST = _descriptor.Descriptor(
  name='Request',
  full_name='Arithmetic.Request',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='PrizePool', full_name='Arithmetic.Request.PrizePool', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='Round', full_name='Arithmetic.Request.Round', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='poker', full_name='Arithmetic.Request.poker', index=2,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='PlayerList', full_name='Arithmetic.Request.PlayerList', index=3,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=134,
  serialized_end=251,
)


_REPLY = _descriptor.Descriptor(
  name='Reply',
  full_name='Arithmetic.Reply',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='zhuangCardList', full_name='Arithmetic.Reply.zhuangCardList', index=0,
      number=1, type=5, cpp_type=1, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='xianCardList', full_name='Arithmetic.Reply.xianCardList', index=1,
      number=2, type=5, cpp_type=1, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=253,
  serialized_end=306,
)


_POKER = _descriptor.Descriptor(
  name='Poker',
  full_name='Arithmetic.Poker',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='cards', full_name='Arithmetic.Poker.cards', index=0,
      number=1, type=5, cpp_type=1, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=308,
  serialized_end=330,
)

_PLAYER_DATAENTRY.containing_type = _PLAYER
_PLAYER.fields_by_name['data'].message_type = _PLAYER_DATAENTRY
_REQUEST.fields_by_name['poker'].message_type = _POKER
_REQUEST.fields_by_name['PlayerList'].message_type = _PLAYER
DESCRIPTOR.message_types_by_name['Empty'] = _EMPTY
DESCRIPTOR.message_types_by_name['Player'] = _PLAYER
DESCRIPTOR.message_types_by_name['Request'] = _REQUEST
DESCRIPTOR.message_types_by_name['Reply'] = _REPLY
DESCRIPTOR.message_types_by_name['Poker'] = _POKER
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Empty = _reflection.GeneratedProtocolMessageType('Empty', (_message.Message,), {
  'DESCRIPTOR' : _EMPTY,
  '__module__' : 'grpc_pb2'
  # @@protoc_insertion_point(class_scope:Arithmetic.Empty)
  })
_sym_db.RegisterMessage(Empty)

Player = _reflection.GeneratedProtocolMessageType('Player', (_message.Message,), {

  'DataEntry' : _reflection.GeneratedProtocolMessageType('DataEntry', (_message.Message,), {
    'DESCRIPTOR' : _PLAYER_DATAENTRY,
    '__module__' : 'grpc_pb2'
    # @@protoc_insertion_point(class_scope:Arithmetic.Player.DataEntry)
    })
  ,
  'DESCRIPTOR' : _PLAYER,
  '__module__' : 'grpc_pb2'
  # @@protoc_insertion_point(class_scope:Arithmetic.Player)
  })
_sym_db.RegisterMessage(Player)
_sym_db.RegisterMessage(Player.DataEntry)

Request = _reflection.GeneratedProtocolMessageType('Request', (_message.Message,), {
  'DESCRIPTOR' : _REQUEST,
  '__module__' : 'grpc_pb2'
  # @@protoc_insertion_point(class_scope:Arithmetic.Request)
  })
_sym_db.RegisterMessage(Request)

Reply = _reflection.GeneratedProtocolMessageType('Reply', (_message.Message,), {
  'DESCRIPTOR' : _REPLY,
  '__module__' : 'grpc_pb2'
  # @@protoc_insertion_point(class_scope:Arithmetic.Reply)
  })
_sym_db.RegisterMessage(Reply)

Poker = _reflection.GeneratedProtocolMessageType('Poker', (_message.Message,), {
  'DESCRIPTOR' : _POKER,
  '__module__' : 'grpc_pb2'
  # @@protoc_insertion_point(class_scope:Arithmetic.Poker)
  })
_sym_db.RegisterMessage(Poker)


_PLAYER_DATAENTRY._options = None

_BJL = _descriptor.ServiceDescriptor(
  name='BJL',
  full_name='Arithmetic.BJL',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=332,
  serialized_end=437,
  methods=[
  _descriptor.MethodDescriptor(
    name='Handle',
    full_name='Arithmetic.BJL.Handle',
    index=0,
    containing_service=None,
    input_type=_REQUEST,
    output_type=_REPLY,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='NewPoker',
    full_name='Arithmetic.BJL.NewPoker',
    index=1,
    containing_service=None,
    input_type=_EMPTY,
    output_type=_POKER,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_BJL)

DESCRIPTOR.services_by_name['BJL'] = _BJL

# @@protoc_insertion_point(module_scope)
