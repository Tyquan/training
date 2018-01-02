# Building BlockChain Projects (Notes)

# Chapter 1 Part 1

## Advantages of decentralized applications

	* DApps are fault-tolerant as there is no single point of failure because they are distributed by default. 
	* They prevent violation of net censorship as there is no central authority to whom the government can pressurize to remove some content. Governments cannot even block the app's domain or IP address as DApps are not accessed via a particular IP address or domain. Obviously the government can track individual nodes in the network by their IP address and shut them down, but if the network is huge, then it becomes next to impossible to shut down the app, especially if the nodes are distributed among various different countries. 
	* It is easy for users to trust the application as it's not controlled by a single authority that could possibly cheat the users for profit.

## Disadvantages of decentralized applications

	* Fixing bugs or updating DApps is difficult, as every peer in the network has to update their node software. 
	* Some applications require verification of user identity (that is, KYC), and as there is no central authority to verify the user identity, it becomes an issue while developing such applications. 
	* They are difficult to build because they use very complex protocols to achieve consensus and they have to be built to scale from the start itself. So we cannot just implement an idea and then later on add more features and scale it. 
	* Applications are usually independent of third-party APIs to get or store something. DApps shouldn't depend on centralized application APIs, but DApps can be dependent on other DApps. As there isn't a large ecosystem of DApps yet, it is difficult to build a DApp. Although DApps can be dependent on other DApps theoretically, it is very difficult to tightly couple DApps practically

## Decentralized autonomous organization

> Decentralized autonomous organization (DAO) is an organization that is represented by a computer program (that is, the organization runs according to the rules written in the program), is completely transparent, and has total shareholder control and no influence of the government. 

> To achieve these goals, we need to develop a DAO as a DApp. Therefore, we can say that DAO is a subclass of DApp. Dash, and the DAC are a few example of DAOs.

## User identity in DApps

>  DApps cannot understand and verify scanned documents, nor can they send SMSes; therefore, we need to feed them with digital identities that they can understand and verify. The major problem is that hardly any DApps have digital identities and only a few people know how to get a digital identity.

> There are various forms of digital identities. Currently, the most recommended and popular form is a digital certificate. A digital certificate (also called a public key certificate or identity certificate) is an electronic document used to prove ownership of a public key. Basically, a user owns a private key, public key, and digital certificate. The private key is secret and the user shouldn't share it with anyone. The public key can be shared with anyone. The digital certificate holds the public key and information about who owns the public key. Obviously, it's not difficult to produce this kind of certificate; therefore, a digital certificate is always issued by an authorized entity that you can trust. The digital certificate has an encrypted field that's encrypted by the private key of the certificate authority. To verify the authenticity of the certificate, we just need to decrypt the field using the public key of the certificate authority, and if it decrypts successfully, then we know that the certificate is valid,

> Even if users successfully get digital identities and they are verified by the DApp, there is a still a major issue; that is, there are various digital certificate issuing authorities, and to verify a digital certificate, we need the public key of the issuing authority. It is really difficult to include the public keys of all the authorities and update/add new ones. Due to this issue, the procedure of digital identity verification is usually included on the client side so that it can be easily updated. Just moving this verification procedure to the client side doesn't completely solve this issue because there are lots of authorities issuing digital certificates and keeping track of all of them, and adding them to the client side, is cumbersome.

## User Account in DApps

> Many applications need user accounts' functionality. Data associated with an account should be modifiable by the account owner only. DApps simply cannot have the same username- and password-based account functionality as do centralized applications because passwords cannot prove that the data change for an account has been requested by the owner. 

> There are quite a few ways to implement user accounts in DApps. But the most popular way is using a public-private key pair to represent an account. The hash of the public key is the unique identifier of the account. To make a change to the account's data, the user needs to sign the change using his/her private key. We need to assume that users will store their private keys safely. If users lose their private keys, then they lose access to their account forever.

## Popular DApps

### Bitcoin

#### What is a ledger?

> A ledger is basically a list of transactions. A database is different from a ledger. In a ledger, we can only append new transactions, whereas in a database, we can append, modify, and delete transactions. A database can be used to implement a ledger.

#### What is Blockchain?

> A blockchain is a data structure used to create a decentralized ledger. A blockchain is composed of blocks in a serialized manner. A block contains a set of transactions, a hash of the previous block, timestamp (indicating when the block was created), block reward, block number, and so on. Every block contains a hash of the previous block, thus creating a chain of blocks linked with each other. Every node in the network holds a copy of the blockchain. 

> Proof-of-work, proof-of-stake, and so on are various consensus protocols used to keep the blockchain secure. Depending on the consensus protocol, the blocks are created and added to the blockchain differently. In proof-of-work, blocks are created by a procedure called mining, which keeps the blockchain safe. In the proof-of-work protocol, mining involves solving complex puzzles. We will learn more about blockchain and its consensus protocols later in this book. 

> The blockchain in the Bitcoin network holds Bitcoin transactions. Bitcoins are supplied to the network by rewarding new Bitcoins to the nodes that successfully mine blocks. 

> The major advantage of blockchain data structure is that it automates auditing and makes an application transparent yet secure. It can prevent fraud and corruption. It can be used to solve many other problems depending on how you implement and use it.