import PouchDB from "pouchdb";

let url =
  "https://apikey-v2-10acmtjui6wwcpvgs9po3wwt0zzrpxs5m4kcwow814s0:b3f0e05845b286b5caa3702efb7cb0aa@3685cb5b-1770-4ad9-8980-f8968569b9e2-bluemix.cloudantnosqldb.appdomain.cloud/tuizipthucpham";

export let db = new PouchDB(url);