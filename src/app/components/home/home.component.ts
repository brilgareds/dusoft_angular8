import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ModalService } from '../modal';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public table: any;
    public data: any;
    public tableGeneralOptions: any;
    public filtroGrid: any;
    public options: object;
    public gridApi;
    public gridColumnApi;
    public url: string;
    public obj: object;
    public mensaje: any;
    public exampleData2: any;
    public exampleData: any;
    public modalInstance: any;
    public opts: any;
    public Usuario: number;
    public bodyText: string;

    constructor(public http: HttpClient, private modalService: ModalService) {
        this.url = 'http://localhost/dusoft/api/index.php';
        this.filtroGrid = {filterText: '', useExternalFilter: false};
        this.obj = {};
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
        this.options = {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            observe: 'body'
        };

        this.table = {
            data: this.data,
            options: this.tableGeneralOptions,
            filterOptions: this.filtroGrid,
            defaultColDef: { resizable: true, editable: true, sortable: true, filter: true, width: 270 },
            columnDefs: [
                { headerName: 'Codigo', field: 'cod', width: 100, checkboxSelection: true, filter: 'agNumberColumnFilter' },
                { headerName: 'Nombre', field: 'name' },
                { headerName: 'Fecha', field: 'date', filter: 'agDateColumnFilter' },
                { headerName: 'Responsable', field: 'responsible' }
            ]
        };

        this.exampleData2 = [{
            key: 'Despachos Generados',
            values: [
                ['Enero', 129],
                ['Febrero', 200],
                ['Marzo', 150],
                ['Abril', 80],
                ['Mayo', 130],
                ['Junio', 200],
                ['Julio', 210],
                ['Agosto', 200],
                ['Septiembre', 180],
                ['Octubre', 100],
                ['Noviembre', 170],
                ['Diciembre', 250]
            ]
        }];

        this.Usuario = 1350;
        /*this.Usuario = Usuario.getUsuarioActual();*/

        this.exampleData = [
            { key: 'Enero', y: 129},
            { key: 'Febrero', y: 200 },
            { key: 'Marzo', y: 150 },
            { key: 'Abril', y: 80 },
            { key: 'Mayo', y: 200 },
            { key: 'Junio', y: 120 },
            { key: 'Julio', y: 150 },
            { key: 'Agosto', y: 80 },
            { key: 'Septiembre', y: 90 },
            { key: 'Octubre', y: 100 },
            { key: 'Noviembre', y: 120 },
            { key: 'Diciembre', y: 110 }
        ];
    }

    setLocalStorage(index: any, valor: any) {
        localStorage.setItem(index, valor);
    }
    getLocalStorage(index: any) {
        localStorage.getItem(index);
    }

    quickSearch() {
        this.gridApi.setQuickFilter(this.filtroGrid.filterText);
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    getInformation() {
        return this.http.post(this.url, this.obj, this.options);
    }
    xFunction() { return (d) => d.key; }
    yFunction() { return (d) => d.y; }
    description() { return (d) => d.key; }

    toolTipContentFunction() {
        return (key, x, y, e, graph) => '<h4>' + key + '</h4>' + '<p>' + y + ' en ' + x + '</p>';
    }

    toolTipContentFunction2() {
        return (key, x, y, e, graph) => '<center><h4>' + key + '</h4></center>' + '<p>' + x + '</p>';
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    ngOnInit() {
        /*this.getInformation().subscribe(res => {
         const response: any = res;
         console.log('Response: ', response);

         if (response.status === 200) {
         this.data = response.obj;
         } else { console.log('Hubo un error!\n', response.msg); }
         });*/

        this.mensaje = this.getLocalStorage('mensajeDashboard');
        if (this.mensaje) {
            this.opts = {
                backdrop: true,
                backdropClick: false,
                dialogFade: false,
                //  size: 'sm',
                keyboard: true,
                template: ` <div class="modal-header">
                                <button type="button" class="close" ng-click="()">&times;</button>
                                <h4 class="modal-title">Aviso</h4>
                            </div>
                            <div class="modal-body">
                                <h5 >{{mensaje.mensaje}}</h5>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-primary" ng-click="close()">Ok</button>
                            </div>`,
                scope: this,
                controller: ($scope, $modalInstance, mensaje) => {
                    $scope.mensaje = mensaje;
                    $scope.close = () => {
                        this.setLocalStorage('mensajeDashboard', undefined);
                        $modalInstance.close();
                    };
                },
                resolve: {
                    mensaje: () => this.mensaje
                }
            };
            /*this.modalInstance = $modal.open($scope.opts);*/
        }

        this.bodyText = 'This text can be updated in modal 1';
    }
}
