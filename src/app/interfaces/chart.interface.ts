export interface ChartInput {
    data: any[];
    type: string;
    options: ChartOptions;
}

export interface ChartOptions {
    title: string;
    hAxis: Axis;
    vAxis: Axis;
    legend: Position;
    colors: string[];
}

interface Axis {
    title: string;
    titleTextStyle: Color;
}

interface Position {
    position: string;
}

interface Color {
    color: string;
}
