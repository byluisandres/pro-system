<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Detalle de venta</title>
    <style>
        .info {
            background-color: #FAFAFA;
            padding: 1rem;
            line-height: 0.5rem
        }

        .info h1 {
            font-size: 1rem
        }

        .mr-2 {
            margin-right: 0.1rem
        }

        .detail {
            padding: 1rem;
        }

        .detail h2 {
            font-size: 1rem
        }

        .text-right {
            text-align: right;
        }

        #products {
            border-collapse: collapse;
            width: 100%;
        }

        #products td,
        #products th {
            border: 1px solid #F1F5F9;
            padding: 8px;
        }

        #products tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        #products th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #F3F4F6;
            color: #171717;
        }

    </style>
</head>

<body>
    <section class="info">
        <h1>
            <span> Nombre:</span>
            {{ $sale->client->name }}
        </h1>
        <div class="documentation">
            <p>
                <span class=" mr-2">
                    Tipo de documento:
                </span>
                {{ $sale->client->type_document }}
            </p>
            <p>
                <span class=" mr-2">
                    Número de documento:
                </span>
                {{ $sale->client->num_document }}
            </p>
        </div>
        <p>
            <span class=" mr-2">Dirección:</span>
            {{ $sale->client->address }}
        </p>
        <p>
            <span class=" mr-2">Teléfono:</span>
            {{ $sale->client->phone }}
        </p>
        <p>
            <span class=" mr-2">
                Correo eléctronico:
            </span>
            {{ $sale->client->email }}
        </p>
    </section>
    <section class="detail">
        <h2>
            Número de venta: <span> {{ $sale->num_sales }}</span>
        </h2>

        <div>
            <p>
                Fecha de compra: <span>{{ $sale->date_sales }}</span>
            </p>
            <p>
                Estado: <span>{{ $sale->status }}</span>
            </p>
        </div>
        <table id="products">
            <thead>
                <tr>
                    <th scope="col">
                        Nombre
                    </th>
                    <th scope="col">
                        Categoría
                    </th>
                    <th scope="col">
                        Precio de Venta
                    </th>
                    <th scope="col">
                        Cantidad
                    </th>
                    <th scope="col">
                        Subtotal
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($saleDetails as $detail)
                    <tr>
                        <td>
                            {{ $detail->product }}</td>
                        <td>
                            {{ $detail->category }}</td>
                        <td>
                            {{ $detail->sales_price }} &euro;</td>
                        <td>
                            {{ $detail->amount }}</td>
                        <td>
                            {{ $detail->sales_price * $detail->amount }} &euro;</td>
                    </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="6" class="text-right ">
                        Total: {{ $sale->total }} &euro;
                    </td>
                </tr>
            </tfoot>
        </table>
    </section>
</body>

</html>
