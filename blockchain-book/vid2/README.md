# Building BlockChain Projects (Notes)

#Chapter 1 Part 2

### Ethereum

> Ethereum is a decentralized platform that allows us to run DApps on top of it. These DApps are written using smart contracts. One or more smart contracts can form a DApp together. An Ethereum smart contract is a program that runs on Ethereum. A smart contract runs exactly as programmed without any possibility of downtime, censorship, fraud, and third-party interference

> The main advantage of using Ethereum to run smart contracts is that it makes it easy for smart contracts to interact with each other. Also, you don't have to worry about integrating consensus protocol and other things; instead, you just need to write the application logic. Obviously, you cannot build any kind of DApp using Ethereum; you can build only those kinds of DApps whose features are supported by Ethereum. 

> Ethereum has an internal currency called ether. To deploy smart contracts or execute functions of the smart contracts, you need ether. 

### The Hyperledger project

> Hyperledger is a project dedicated to building technologies to build permissioned DApps. Hyperledger fabric (or simply fabric) is an implementation of the Hyperledger project. Other implementations include Intel Sawtooth and R3 Corda. 

> Fabric is a permissioned decentralized platform that allows us to run permissioned DApps (called chaincodes) on top of it. We need to deploy our own instance of fabric and then deploy our permissioned DApps on top of it. Every node in the network runs an instance of fabric. Fabric is a plug-and-play system where you can easily plug and play various consensus protocols and features.

> Hyperledger uses the blockchain data structure. Hyperledger-based blockchains can currently choose to have no consensus protocols (that is, the NoOps protocol) or else use the PBFT (Practical Byzantine Fault Tolerance) consensus protocol. It has a special node called certificate authority, which controls who can join the network and what they can do.

### IPFS

> IPFS (InterPlanetary File System) is a decentralized filesystem. IPFS uses DHT (distributed hash table) and Merkle DAG (directed acyclic graph) data structures. It uses a protocol similar to BitTorrent to decide how to move data around the network. One of the advanced features of IPFS is that it supports file versioning. To achieve file versioning, it uses data structures similar to Git

>  Every node doesn't hold all files; it stores the files it needs. Therefore, if a file is less popular, then obviously many nodes won't have it; therefore, there is a huge chance of the file disappearing from the network. Due to this, many people prefer to call IPFS a decentralized peer-to-peer file-sharing application. Or else, you can think of IPFS as BitTorrent, which is completely decentralized; that is, it doesn't have a tracker and has some advanced features

#### How does it work?

> Let's look at an overview of how IPFS works. When we store a file in IPFS, it's split into chunks < 256 KB and hashes of each of these chunks are generated. Nodes in the network hold the IPFS files they need and their hashes in a hash table. 

> There are four types of IPFS files: blob, list, tree, and commit. A blob represents a chunk of an actual file that's stored in IPFS. A list represents a complete file as it holds the list of blobs and other lists. As lists can hold other lists, it helps in data compression over the network. A tree represents a directory as it holds a list of blobs, lists, other trees, and commits. And a commit file represents a snapshot in the version history of any other file. As lists, trees, and commits have links to other IPFS files, they form a Merkle DAG. 

> So when we want to download a file from the network, we just need the hash of the IPFS list file. Or if we want to download a directory, then we just need the hash of the IPFS tree file. 

> As every file is identified by a hash, the names are not easy to remember. If we update a file, then we need to share a new hash with everyone that wants to download that file. To tackle this issue, IPFS uses the IPNS feature, which allows IPFS files to be pointed using selfcertified names or human-friendly names.

### Filecoin

> The major reason that is stopping IPFS from becoming a decentralized filesystem is that nodes only store the files they need. Filecoin is a decentralized filesystem similar to IPFS with an internal currency to incentivize nodes to store files, thus increasing file availability and making it more like a filesystem. 

> Nodes in the network will earn Filecoins to rent disk space, and to store/retrieve files, you need to spend Filecoins.

### Namecoin

> Namecoin is a decentralized key-value database. It has an internal currency too, called Namecoins. Namecoin uses the blockchain data structure and the proof-of-work consensus protocol. 

> In Namecoin, you can store key-value pairs of data. To register a key-value pair, you need to spend Namecoins. Once you register, you need to update it once in every 35,999 blocks; otherwise, the value associated with the key will expire. To update, you need Namecoins as well. There is no need to renew the keys; that is, you don't need to spend any Namecoins to keep the key after you have registered it.

> Namecoin has a namespace feature that allows users to organize different kinds of keys. Anyone can create namespaces or use existing ones to organize keys.

> Some of the most popular namespaces are a (application specific data), d (domain name specifications), ds (secure domain name), id (identity), is (secure identity), p (product), and so on.

### .bit domains

> To access a website, a browser first finds the IP address associated with the domain. These domain name and IP address mappings are stored in DNS servers, which are controlled by large companies and governments. Therefore, domain names are prone to censorship. Governments and companies usually block domain names if the website is doing something illegal or making loss for them or due to some other reason.

> Due to this, there was a need for a decentralized domain name database. As Namecoin stores key-value data just like DNS servers, Namecoin can be used to implement a decentralized DNS, and this is what it has already been used for. The d and ds namespaces contain keys ending with .bit, representing .bit domain names. Technically, a namespace doesn't have any naming convention for the keys but all the nodes and clients of Namecoin agree to this naming convention. If we try to store invalid keys in d and ds namespaces, then clients will filter invalid keys.

> A browser that supports .bit domains needs to look up in the Namecoin's d and ds namespace to find the IP address associated with the .bit domain. 

> The difference between the d and ds namespaces is that ds stores domains that support TLS and d stores the ones that don't support TLS. We have made DNS decentralized; similarly, we can also make the issuing of TLS certificates decentralized. 

> This is how TLS works in Namecoin. Users create self-signed certificates and store the certificate hash in Namecoin. When a client that supports TLS for .bit domains tries to access a secured .bit domain, it will match the hash of the certificate returned by the server with the hash stored in Namecoin, and if they match, then they proceed with further communication with the server. 

> A decentralized DNS formed using Namecoin is the first solution to the Zooko triangle. The Zooko triangle defines applications that have three properties, that is, decentralized, identity, and secure. Digital identity is used not only to represent a person, but it can also represent a domain, company, or something else.

### Dash

> Dash is a decentralized currency similar to Bitcoin. Dash uses the blockchain data structure and the proof-of-work consensus protocol. Dash solves some of the major issues that are caused by Bitcoin.

#### Decentralized governance and budgeting

> To host a masternode, you need to have 1,000 Dashes and a static IP address. In the Dash network, both masternodes and miners earn Dashes. When a block is mined, 45% reward goes to the miner, 45% goes to the masternodes, and 10% is reserved for the budget system.

> Masternodes enable decentralized governance and budgeting. Due to the decentralized governance and budgeting system, Dash is called a DAO because that's exactly what it is.

> Masternodes in the network act like shareholders; that is, they have rights to take decisions regarding where the 10% Dash goes. This 10% Dash is usually used to funds other projects. Each masternode is given the ability to use one vote to approve a project.

> Discussions on project proposals happen out of the network. But the voting happens in the network.

> Masternodes can provide a possible solution to verify user identity in DApps; that is, masternodes can democratically select a node to verify user identity. The person or business behind this node can manually verify user documents. A part of this reward can also go to this node. If the node doesn't provide good service, then the masternodes can vote for a different node. This can be a fine solution to the decentralized identity issue.

#### Decentralized Service

> Instead of just approving or rejecting a proposal, masternodes also form a service layer that provides various services. The reason that masternodes provide services is that the more services they provide, the more feature-rich the network becomes, thus increasing users and transactions, which increases prices for Dash currency and the block reward also gets high, therefore helping masternodes earn more profit.

> Masternodes provide services such as PrivateSend (a coin-mixing service that provides anonymity), InstantSend (a service that provides almost instant transactions), DAPI (a service that provides a decentralized API so that users don't need to run a node), and soon.

### BigChainDB

> BigChainDB allows you to deploy your own permissioned or permissionless decentralized database. It uses the blockchain data structure along with various other database-specific data structures.

> It also provides many other features, such as rich permissions, querying, linear scaling, and native support for multi-assets and the federation consensus protocol.

### OpenBazaar

> OpenBazaar is a decentralized e-commerce platform. You can buy or sell goods using OpenBazaar. Users are not anonymous in the OpenBazaar network as their IP address is recorded. A node can be a buyer, seller, or a moderator. It uses a Kademlia-style distributed hash table data structure. A seller must host a node and keep it running in order to make the items visible in the network. It prevents account spam by using the proof-of-work consensus protocol. It prevents ratings and reviews spam using proof-of-burn, CHECKLOCKTIMEVERIFY, and security deposit consensus protocols. Buyers and sellers trade using Bitcoins. A buyer can add a moderator while making a purchase. The moderator is responsible for resolving a dispute if anything happens between the buyer and the seller. Anyone can be a moderator in the network. Moderators earn commission by resolving disputes.

### Ripple

> Ripple is decentralized remittance platform. It lets us transfer fiat currencies, digital currencies, and commodities. It uses the blockchain data structure and has its own consensus protocol. In ripple docs, you will not find the term blocks and blockchain; they use the term ledger instead. In ripple, money and commodity transfer happens via a trust chain in a manner similar to how it happens in a hawala network. 

> In ripple, there are two kinds of nodes, that is, gateways and regular nodes. Gateways support deposit and withdrawal of one or more currencies and/or commodities. To become a gateway in a ripple network, you need permission as gateways to form a trust chain. Gateways are usually registered financial institutions, exchanges, merchants, and so on