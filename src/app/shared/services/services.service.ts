import { Injectable } from "@angular/core"
import { ServiceInterface } from "../models/service.model"

@Injectable({
    providedIn: 'root'
})
export class ServiceService {

    getAllServices(): ServiceInterface[] {

        return [

            {
                id: 1,
                name: 'Full Body Massage',
                description: 'A relaxing full body massage to release tension and restore balance.',
                longDescription: 'Our full body massage focuses on relieving stress, improving circulation and promoting deep relaxation. Perfect for anyone needing a full reset for both body and mind.',
                price: 500,
                duration: 60,
                image: 'assets/services/full-body.png',
                popular: true
            },

            {
                id: 2,
                name: 'Deep Tissue Massage',
                description: 'Targets deep muscle tension and chronic pain.',
                longDescription: 'Deep tissue therapy focuses on deeper muscle layers to release knots, improve mobility and reduce long-term muscle tension.',
                price: 650,
                duration: 60,
                image: 'assets/services/deep-tissue.png'
            },

            {
                id: 3,
                name: 'Neck & Shoulder Massage',
                description: 'Relieve tension caused by stress and desk work.',
                longDescription: 'This focused massage releases built-up tension in the neck, shoulders and upper back. Ideal for people working long hours at a desk.',
                price: 350,
                duration: 30,
                image: 'assets/services/neck-shoulder.png'
            },

            {
                id: 4,
                name: 'Hot Stone Therapy',
                description: 'Heated stones melt away muscle tension.',
                longDescription: 'Hot stones are used to deeply relax muscles, improve blood circulation and create a calming therapeutic experience.',
                price: 700,
                duration: 75,
                image: 'assets/services/hot-stone.png',
                popular: true
            },

            {
                id: 5,
                name: 'Aromatherapy Massage',
                description: 'Relaxation with essential oils.',
                longDescription: 'A gentle massage combined with therapeutic essential oils to calm the mind and enhance overall wellbeing.',
                price: 600,
                duration: 60,
                image: 'assets/services/aromatherapy.png'
            },

            {
                id: 6,
                name: 'Facial Treatment',
                description: 'Luxury facial to rejuvenate your skin.',
                longDescription: 'Deep cleansing facial treatment designed to hydrate, nourish and revitalize your skin while promoting relaxation.',
                price: 600,
                duration: 50,
                image: 'assets/services/facial.png'
            },

            {
                id: 7,
                name: 'Wellness Therapy',
                description: 'Holistic therapy for mind and body.',
                longDescription: 'A complete wellness experience combining relaxation techniques and massage to restore balance and energy.',
                price: 650,
                duration: 90,
                image: 'assets/services/wellness.png'
            },

            {
                id: 8,
                name: 'Travel To You',
                description: 'Professional massage in the comfort of your home.',
                longDescription: 'Enjoy professional wellness therapy at your location. Perfect for busy clients who prefer treatment at home.',
                price: 800,
                duration: 60,
                image: 'assets/services/mobile.png'
            }

        ]
    }
}