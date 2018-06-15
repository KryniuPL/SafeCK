package com.idea.kielce.hackathon.stay_null_safe.SafeCK.models

import javax.persistence.*

@Entity
data class Alert (
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        var Id: Long = 0,
        var text: String = "",
        @ManyToOne
        var owner: User,
        @OneToOne
        var category: Category,
        @OneToOne
        var status: Status,
        var latitude: Double,
        var longitude: Double
)