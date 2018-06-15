package com.idea.kielce.hackathon.stay_null_safe.SafeCK.controllers

import com.idea.kielce.hackathon.stay_null_safe.SafeCK.models.Alert
import com.idea.kielce.hackathon.stay_null_safe.SafeCK.repositories.AlertRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/alert")
class AlertRestController {

    @Autowired
    lateinit var alertRepository: AlertRepository

    @GetMapping
    fun getAlerts(): List<Alert> = alertRepository.findAll()

    @GetMapping("/{id}")
    fun getAlert(@PathVariable("id") id: Long): Optional<Alert> = alertRepository.findById(id)

    @PostMapping
    fun createAlert(@RequestBody alert: Alert): Alert = alertRepository.save(alert)

    @DeleteMapping
    fun deleteAlert(@RequestBody alert: Alert): Unit = alertRepository.delete(alert)

}