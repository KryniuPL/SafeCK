package com.idea.kielce.hackathon.stay_null_safe.SafeCK.models

data class Authentication(
    var username: String,
    var password: String,
    var isAdmin: Boolean
)