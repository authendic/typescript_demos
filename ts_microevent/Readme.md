# typescript microevent.ts demo

## 创建

1. create

    ```shell
    mkdir ts_microevent; cd ts_microevent
    # 生成 package.json
    npm init -y
    # 添加tsc命令
    npm install typescript --save-dev
    # 添加 node.d.ts, 提供node内置函数对象的提示.  @types(typescript 声明文件)目录下为全局可见
    npm install @types/node --save-dev
    # 生成 tsconfig.json
    npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom  --module commonjs

    npm i microevent.ts
    npm i ts-node
    ```

## 运行

1. run

    ```shell
    git clone --depth 1 git@github.com:authendic/typescript_demos.git
    cd typescript_demos/ts_microevent
    npm i
    npx ts-node .
    ```
