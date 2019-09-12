import {Component, ViewChild, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-ajuste-costo',
    templateUrl: './ajuste-costo.component.html',
    styleUrls: ['./ajuste-costo.component.scss']
})
export class AjusteCostoComponent implements OnInit {
    /*public configuration: types.DatePickerSettings;*/
    public date = '03/08/2019';
    public eventLog = '';
    public productoFecha1: any;
    public productoFecha2: any;
    public format: any;
    public filtroProducto: any = {nombre: ''};
    public abrirfechainicial = false;
    public abrirfechafinal = false;
    public datepicker: any;
    public dataTable: any;
    public dtOption: any = {};
    /* public datepicker: DatePickerComponent;
     public configuration: types.DatePickerSettings;*/
    /*public faCoffee: any = faTwitter;*/
    constructor() {
        /*this.configuration = {
         value: this.date,
         uiLibrary: 'bootstrap4',
         width: 200,
         open: (e) => {
         this.eventLog += 'Open is fired.';
         },
         close: (e) => {
         this.eventLog += 'Close is fired.';
         },
         change: (e) => {
         this.date = this.datepicker.instance.value().toString();
         this.eventLog += 'Change is fired. ';
         }
         };*/


    }

    ngOnInit() {
        $(document).ready(() => {
            $('#datepicker').datepicker({
                uiLibrary: 'bootstrap4',
                locale: 'es-es',
            });
            $('#datepicker2').datepicker({
                uiLibrary: 'bootstrap4',
                locale: 'es-es',
            });
        });

        $(document).ready(() => {
            $('#dataTable').DataTable({
                responsive: true,
                select: true,
                keys: true,
                colReorder: true,
                pageResize: true,
                lengthChange: true,
                pageLength: 20,
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'pdfHtml5',
                        text: '<i class="icons fas fa-file-pdf fa-md"></i>',
                        titleAttr: 'PDF',
                        exportOptions: {
                            columns: [0, ':visible']
                        }
                    },
                    {
                        extend: 'excelHtml5',
                        text: '<i class="icons fas fa-file-excel fa-md"></i>',
                        titleAttr: 'Excel',
                        exportOptions: {
                            columns: [0, ':visible']
                        }
                    },
                    {
                        extend: 'copyHtml5',
                        text: '<i class="icons fas fa-copy fa-md"></i>',
                        titleAttr: 'Copy',
                        exportOptions: {
                            columns: [0, ':visible']
                        }
                    }
                ]
            });

            $('#dataTable').addClass('table table-bordered');

            /**** SELECT DIV PARENT ****/
            var selectDivParent = $('#dataTable_wrapper')[0];
            /**** CREATE NEW DIV ****/
            var newDivContainer = document.createElement('div');
            selectDivParent.prepend(newDivContainer);
            newDivContainer.setAttribute('id', 'div_buttons_table');

            /**** VARIABLE WITH NEW DIV ****/
            var divContainer = $('#div_buttons_table');
            /**** SELECT DIV 1, 2, 3 ****/

            var div_1 = selectDivParent.childNodes[1];
            var div_2 = selectDivParent.childNodes[2];

            /**** MOVE DIV 1, 2, 3 ****/
            divContainer.append(div_1);
            divContainer.append(div_2);
        });
    }

    abrirFechaInicial($event) {
        $event.preventDefault();

        this.abrirfechainicial = true;
        this.abrirfechafinal = false;
    }

    setValue() {
        this.datepicker.instance.value('03/12/2019');
    }
}
