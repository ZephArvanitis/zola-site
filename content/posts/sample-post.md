+++
title = "Sample post"
date = 2021-01-27
draft = true
[extra]
chart = true
+++

This is text here, I hope it works.
<!-- more -->

{% chart() %}
{
    "type": "line",
    "data": {
        "labels": ["January", "February", "March", "April", "May", "June", "July"],
        "datasets": [{
            "label": "My First dataset",
            "backgroundColor": "rgb(255, 99, 132)",
            "borderColor": "rgb(255, 99, 132)",
            "data": [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    "options": {}
}
{% end %}

{% chart() %}
{
  "type": "bar",
  "xLabel": "Platforms",
  "yLabel": "Count",
  "data": {
    "labels": ["Earn Money", "Get Famous", "Use terminal"],
    "datasets": [
      {
        "label": "approach",
        "display": false,
        "data": [30, 45, 100]
      }
    ]
  },
  "options": {
    "title": {
      "display": true,
      "text": "How to feel powerful"
    },
    "legend": {
      "display": false
    }
  }
}
{% end %}
