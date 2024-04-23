-- CreateTable
CREATE TABLE "funcionario" (
    "codigo" SERIAL NOT NULL,
    "nome" TEXT,
    "sexo" TEXT,
    "dt_nasc" TIMESTAMP(3) NOT NULL,
    "salario" DOUBLE PRECISION NOT NULL,
    "supervisor" INTEGER,
    "depto" INTEGER,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "departamento" (
    "codigo" SERIAL NOT NULL,
    "nome" TEXT,
    "sigla" TEXT,
    "descricao" TEXT,
    "gerente" INTEGER,

    CONSTRAINT "departamento_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "projeto" (
    "codigo" SERIAL NOT NULL,
    "nome" TEXT,
    "descricao" TEXT,
    "responsavel" INTEGER,
    "depto" INTEGER,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projeto_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "atividade" (
    "codigo" SERIAL NOT NULL,
    "descricao" TEXT,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,
    "projeto" INTEGER NOT NULL,

    CONSTRAINT "atividade_pkey" PRIMARY KEY ("codigo")
);

-- AddForeignKey
ALTER TABLE "atividade" ADD CONSTRAINT "atividade_projeto_fkey" FOREIGN KEY ("projeto") REFERENCES "projeto"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
