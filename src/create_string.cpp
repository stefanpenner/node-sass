#include <nan.h>
#include <stdlib.h>
#include <string.h>
#include "create_string.h"

// takes V8::Value, if it is a string provides a new copy of it, otherwise it returns 0
char* create_string(Nan::MaybeLocal<v8::Value> maybevalue) {
  v8::Local<v8::Value> value;

  if (maybevalue.ToLocal(&value)) {
    if (value->IsNull() || !value->IsString()) {
      return 0;
    }
  } else {
    return 0;
  }

  v8::String::Utf8Value string(value);
  char *str = (char *)malloc(string.length() + 1);
  strcpy(str, *string);
  return str;
}

// takes V8::Value, if it is a string provides the same value as a c_string, otherwise it returns 0
const char* as_string(Nan::MaybeLocal<v8::Value> maybevalue) {
    v8::Local<v8::Value> value;
    
    if (maybevalue.ToLocal(&value)) {
        if (value->IsNull() || !value->IsString()) {
            return 0;
        }
    } else {
        return 0;
  }
    
  v8::String::Utf8Value string(value);
  return *string ? *string : 0;
}
