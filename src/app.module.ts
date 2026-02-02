// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';
// import { RolesModule } from './roles/roles.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '123456',
//       database: 'indrive_db',
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true,
//     }),
//     UsersModule,
//     AuthModule,
//     RolesModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoModule } from './gestion_humana/empleado/empleado.module';
import { EvaluacionDesempenioModule } from './gestion_humana/evaluacion_desempenio/evaluacion_desempenio.module';
import { PreguntaEvaluacionModule } from './gestion_humana/pregunta_evaluacion/pregunta_evaluacion.module';
import { OrdenCompraModule } from './compras/orden_compra/orden_compra.module';
import { DetalleCompraModule } from './compras/detalle_compra/detalle_compra.module';
import { CategoriaModule } from './tablas_basicas/categoria/categoria.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductoAlmacenModule } from './almacen/producto_almacen/producto_almacen.module';
import { LoteProductoAlmacenModule } from './almacen/lote_producto_almacen/lote_producto_almacen.module';
import { LaboratorioProductoModule } from './tablas_basicas/laboratorio_producto/laboratorio_producto.module';
import { EntradasPendientesAlmacenModule } from './almacen/entradas_pendientes_almacen/entradas_pendientes_almacen.module';
import { InventarioAlmacenModule } from './almacen/inventario_almacen/inventario_almacen.module';
import { EntradasAlmacenModule } from './almacen/entradas_almacen/entradas_almacen.module';
import { SalidasAlmacenModule } from './almacen/salidas_almacen/salidas_almacen.module';
import { CentroCostosModule } from './tablas_basicas/centro_costos/centro_costos.module';
import { TipoDocumentoModule } from './tablas_basicas/tipo_documento/tipo_documento.module';
import { CiudadModule } from './tablas_basicas/ciudad/ciudad.module';
import { CargoModule } from './tablas_basicas/cargo/cargo.module';
import { AreaModule } from './tablas_basicas/area/area.module';
import { SexoModule } from './tablas_basicas/sexo/sexo.module';
import { EpsModule } from './tablas_basicas/eps/eps.module';
import { FondoPensionesModule } from './tablas_basicas/fondo_pensiones/fondo_pensiones.module';
import { FondoCesantiasModule } from './tablas_basicas/fondo_cesantias/fondo_cesantias.module';
import { EstadoCivilModule } from './tablas_basicas/estado_civil/estado_civil.module';
import { MedioTransporteModule } from './tablas_basicas/medio_transporte/medio_transporte.module';
import { TipoContratoModule } from './tablas_basicas/tipo_contrato/tipo_contrato.module';
import { CompromisosEmpleadoModule } from './gestion_humana/compromisos_empleado/compromisos_empleado.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Set to false in production
      // options: { encrypt: true },
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    EmpleadoModule,
    EvaluacionDesempenioModule,
    PreguntaEvaluacionModule,
    OrdenCompraModule,
    DetalleCompraModule,
    CategoriaModule,
    UsersModule,
    AuthModule,
    ProductoAlmacenModule,
    LoteProductoAlmacenModule,
    LaboratorioProductoModule,
    EntradasPendientesAlmacenModule,
    InventarioAlmacenModule,
    EntradasAlmacenModule,
    SalidasAlmacenModule,
    CentroCostosModule,
    TipoDocumentoModule,
    CiudadModule,
    CargoModule,
    AreaModule,
    SexoModule,
    EpsModule,
    FondoPensionesModule,
    FondoCesantiasModule,
    EstadoCivilModule,
    MedioTransporteModule,
    TipoContratoModule,
    CompromisosEmpleadoModule,
  ],
  controllers: [AppController],
  providers: [AppService /*, CalidadEsquejesService*/],
})
export class AppModule {}
