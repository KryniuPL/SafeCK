package com.idea.kielce.hackathon.stay_null_safe.SafeCK.models

import javax.persistence.*

@Entity
data class User (
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,
        var username: String = "",
        var password: String = "",
        var firstName: String = "",
        var secondName: String = "",
        var lastName: String = "",
        var email: String = "",
        @OneToMany
        @Column(name = "skillId")
        var skills: List<Skill> = mutableListOf(),
        @OneToMany
        @Column(name = "alertId")
        var alerts: List<Alert> = mutableListOf(),
        var accountStatus: Boolean = true
)