package com.idea.kielce.hackathon.stay_null_safe.SafeCK.models

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class User (
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,

        var username: String = "",
        var password: String = "",

        var skills: List<Alert> = mutableListOf(),

        var alerts: List<Alert> = mutableListOf()
)