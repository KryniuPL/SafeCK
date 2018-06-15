package com.idea.kielce.hackathon.stay_null_safe.SafeCK.models

import javax.persistence.*

@Entity
data class Alert (
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        var Id: Long = 0,
        var text: String = "",
        @OneToOne
        var category: Category? = null,
        @OneToOne
        var status: Status? = null,
        var latitude: Double = 0.0,
        var longitude: Double = 0.0
)