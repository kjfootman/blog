<script>
	import { text } from '@sveltejs/kit';
    import Plotly from 'plotly.js-dist';
	import { onMount } from 'svelte';

    /** @type {HTMLDivElement} */
    let chart;

    onMount(() => {
        let series = [{
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16],
            mode: 'markers + lines',
        }];

        let layout = {
            title: {
                text: 'test title'
            }
        };
        

        Plotly.newPlot(chart, series, layout, { responsive: true });
    });
</script>

<div class="chart" bind:this={ chart }></div>

<style>
    .chart {
        width: 600px;
        height: 500px;
    }
</style>