# Frontend

- 在pancake-frontend同级⽬录迁出以下仓库
1. hoswap-lib：http://124.156.148.38:9354/halo/hoswap-lib.git
2. hoswap-sdk：http://124.156.148.38:9354/halo/hoswap-sdk.git
3. hoswap-core：http://124.156.148.38:9354/halo/hoswap-core.git

按步骤安装必要依赖
```shell
    cd ../hoswap-lib
    yarn
    cd ../hoswap-core
    yarn
    cd ../hoswap-sdk
    yarn
    yarn build
    cd ../pancake-front
    git pull
    yarn
    yarn start
```
