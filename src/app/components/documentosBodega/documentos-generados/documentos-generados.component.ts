import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-documentos-generados',
    templateUrl: './documentos-generados.component.html',
    styleUrls: ['./documentos-generados.component.scss']
})
export class DocumentosGeneradosComponent implements OnInit {
    public documents: any;
    public tableGeneralOptions: object;
    public table: any;
    public filtroGrid: any;
    public torneos: object;
    public urlDocuments: string;
    public response: any;
    public obj: object;
    public gridApi;
    public gridColumnApi;
    public options: object;
    public data: Array<object> = [
        {cod: 7, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 5, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 37, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 43, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 7, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 5, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 37, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 43, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 7, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 5, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 37, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 43, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 7, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 5, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 37, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 43, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 7, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 5, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 37, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 43, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 7, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 5, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 37, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'},
        {cod: 43, name: 'This is the name', date: '2019-09-06', responsible: 'El responsable'}
    ];

    constructor(public http: HttpClient) {
        this.tableGeneralOptions = {
            enableSorting: true,
            enableRowSelection: true,
            enableFullRowSelection: true,
            multiSelect: true,
            enableRowHeaderSelection: false,
            enableColumnMenus: false,
            enableFiltering: true,
            minRowsToShow: 1,
            pagination: true
        };
        this.table = {
            data: this.data,
            options: this.tableGeneralOptions,
            filterOptions: this.filtroGrid,
            defaultColDef: {
                resizable: true,
                editable: true,
                sortable: true,
                filter: true,
                width: 270
            },
            columnDefs: [
                {
                    headerName: 'Codigo',
                    field: 'cod',
                    width: 100,
                    checkboxSelection: true,
                    filter: 'agNumberColumnFilter'
                },
                {
                    headerName: 'Nombre',
                    field: 'name'
                },
                {
                    headerName: 'Fecha',
                    field: 'date',
                    filter: 'agDateColumnFilter'
                },
                {
                    headerName: 'Responsable',
                    field: 'responsible'
                }
            ]
        };
        this.urlDocuments = 'http://localhost:3000/api/Precios_productos/listarAgrupar';
        this.filtroGrid = {filterText: '', useExternalFilter: false};
        this.options = {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            observe: 'body'
        };
        this.obj = { method: 'bajoCosto' };
    }

    quickSearch() {
        this.gridApi.setQuickFilter(this.filtroGrid.filterText);
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    getDocuments() {
        return true;
        // this.http.post(this.urlDocuments, this.obj, this.options);
        // const empresaId = $scope.session.empresaId;

        if (true) { // Validacion de parametros
            /*$scope.root.buscar_radicacion_id = parametro.radicacion_id;
            $scope.fecha_ini = parametro.fecha_ini;
            $scope.fecha_fin = parametro.fecha_fin;

            if (parametro.paginacion === false) {
                $scope.paginaActualDocumentos = 1;
                $scope.paginaActualAjustes = 1;
            }
            // console.log('pagina actual paginaActualDocumentos es: ',parseInt($scope.paginaActualDocumentos));
            // console.log('pagina actual paginaActualAjustes es: ',parseInt($scope.paginaActualAjustes));
            let fecha_ini = parametro.fecha_ini;
            let fecha_fin = parametro.fecha_fin;

            if (!fecha_ini || fecha_ini === '' || !fecha_fin || fecha_fin === '') {
                const fechaActual = new Date();
                fecha_ini = $filter('date')(fechaActual, 'yyyy-MM') + '-01 00:00:00';
                fecha_fin = $filter('date')(fechaActual, 'yyyy-MM-dd') + ' 23:59:59';
            }
            if (fecha_ini && fecha_ini.lenght > 9) {
                fecha_ini = fecha_ini.substring(0, 10);
            }
            if (fecha_fin && fecha_fin.lenght > 9) {
                fecha_fin = fecha_fin.substring(10);
            }

            const obj = {
                data: {
                    filtro: this.filtroBusqueda,
                    relacion_id: this.root.buscar_radicacion_id,
                    fecha_ini,
                    fecha_fin,
                    prefijo: 'ABC',
                    paginaActualDocumentos: parseInt(string, this.paginaActualDocumentos),
                    paginaActualAjustes: parseInt(string, this.paginaActualAjustes)
                }
            }; // console.log('Objeto --> ',obj); // console.log('Antes del Ajax');

            this.http.post(this.urlDocuments, obj, this.options).subscribe(res => {
                const response: any = res;
                console.log('Response: ', response);

                if (response.status === 200) {
                    /!* this.tableTournements.data = response.obj; this.torneos = response.obj; *!/
                } else { console.log('Hubo un error!\n', response.msg); }
            });*/
        } else {
            // console.log('No paso la validacion!! parametros: ',parametro);
        }
    }

    ngOnInit() {
        this.getDocuments();
        /*this.getTorneo().subscribe(res => {
         const response: any = res;
         console.log('Response: ', response);

         if (response.status === 200) {
         this.tableTournements.data = response.obj;
         this.torneos = response.obj;
         } else { console.log('Hubo un error!\n', response.msg); }
         });*/
    }
}
