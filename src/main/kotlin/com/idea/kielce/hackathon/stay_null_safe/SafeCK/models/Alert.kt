package com.idea.kielce.hackathon.stay_null_safe.SafeCK.models

import java.util.*
import javax.persistence.*

@Entity
data class Alert (
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        var Id: Long = 0,
        var title: String = "",
        var description: String = "",
        var createDate: Date = Date(),
        var expirationTime: Int = 0,
        @OneToOne
        var importance: Importance? = null,
        @OneToOne
        var category: Category? = null,
        @OneToOne
        var status: Status? = null,
        var latitude: Double = 0.0,
        var longitude: Double = 0.0,
        @ManyToOne
        var user: User? = null

)