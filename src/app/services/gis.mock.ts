import { Component , OnInit, Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { GIS } from './gis';
import { Headers, Http } from '@angular/http';

export const GISMock: GIS[]= [
    {
        spatialReference:{
            latestWkid: 4223,
            wkid: 123
        },
        candidates:{
            address: 'Kellog Scholl, Wichita, KS',
            attributes:{
                City: 'Wichita',
                Country: 'USA',
                Postal: '',
                StName: 'Kellog',
                Subregrion: 'West Wichita'
            },
            extent:{
                xmax:111111,
                xmin:1111,
                ymax: 2222,
                ymin:2222
            },
            location:{
                x:12121,
                y:21225
            },
            score:95
        }
    },
    {
        spatialReference:{
            latestWkid: 4223,
            wkid: 123
        },
        candidates:{
            address: 'Kellog Scholl, Bonners Ferry, KS',
            attributes:{
                City: 'Wichita',
                Country: 'USA',
                Postal: '',
                StName: 'Kellog',
                Subregrion: 'West Wichita'
            },
            extent:{
                xmax:111111,
                xmin:1111,
                ymax: 2222,
                ymin:2222
            },
            location:{
                x:12121,
                y:21225
            },
            score:95
        }
    },
];
