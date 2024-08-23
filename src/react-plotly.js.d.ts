declare module 'react-plotly.js' {
    import { Component } from 'react';
    import * as Plotly from 'plotly.js-dist';
  
    interface PlotProps {
      data: Plotly.PlotData[];
      layout?: Partial<Plotly.Layout>;
      config?: Partial<Plotly.Config>;
    }
  
    export default class Plot extends Component<PlotProps> {}
  }
  