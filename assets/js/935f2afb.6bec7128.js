"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"mySidebar":[{"type":"link","label":"K3s - Lightweight Kubernetes","href":"/docs/docs/","docId":"introduction"},{"type":"link","label":"Architecture","href":"/docs/docs/architecture/","docId":"architecture/architecture"},{"type":"link","label":"Quick-Start Guide","href":"/docs/docs/quick-start/","docId":"quick-start/quick-start"},{"type":"category","label":"Installation","items":[{"type":"link","label":"Requirements","href":"/docs/docs/installation/requirements","docId":"installation/requirements"},{"type":"link","label":"Configuration Options","href":"/docs/docs/installation/configuration","docId":"installation/configuration"},{"type":"link","label":"Network Options","href":"/docs/docs/installation/network-options","docId":"installation/network-options"},{"type":"link","label":"High Availability with an External DB","href":"/docs/docs/installation/ha","docId":"installation/ha"},{"type":"link","label":"High Availability with Embedded DB","href":"/docs/docs/installation/ha-embedded","docId":"installation/ha-embedded"},{"type":"link","label":"Cluster Datastore Options","href":"/docs/docs/installation/datastore","docId":"installation/datastore"},{"type":"link","label":"Private Registry Configuration","href":"/docs/docs/installation/private-registry","docId":"installation/private-registry"},{"type":"link","label":"Air-Gap Install","href":"/docs/docs/installation/airgap","docId":"installation/airgap"},{"type":"link","label":"Disable Components Flags","href":"/docs/docs/installation/disable-flags","docId":"installation/disable-flags"},{"type":"link","label":"Kubernetes Dashboard","href":"/docs/docs/installation/kube-dashboard","docId":"installation/kube-dashboard"},{"type":"link","label":"Uninstalling K3s","href":"/docs/docs/installation/uninstall","docId":"installation/uninstall"}],"collapsed":true,"collapsible":true,"href":"/docs/docs/installation/"},{"type":"link","label":"Cluster Access","href":"/docs/docs/cluster-access/","docId":"cluster-access/cluster-access"},{"type":"category","label":"Upgrades","items":[{"type":"link","label":"Stopping K3s","href":"/docs/docs/upgrades/killall","docId":"upgrades/killall"},{"type":"link","label":"Manual Upgrades","href":"/docs/docs/upgrades/manual","docId":"upgrades/manual"},{"type":"link","label":"Automated Upgrades","href":"/docs/docs/upgrades/automated","docId":"upgrades/automated"}],"collapsed":true,"collapsible":true,"href":"/docs/docs/upgrades/"},{"type":"link","label":"Backup and Restore","href":"/docs/docs/backup-restore/","docId":"backup-restore/backup-restore"},{"type":"link","label":"Volumes and Storage","href":"/docs/docs/storage/","docId":"storage/storage"},{"type":"link","label":"Networking","href":"/docs/docs/networking/","docId":"networking/networking"},{"type":"link","label":"Helm","href":"/docs/docs/helm/","docId":"helm/helm"},{"type":"link","label":"Advanced Options and Configuration","href":"/docs/docs/advanced/","docId":"advanced/advanced"},{"type":"link","label":"FAQ","href":"/docs/docs/faq/","docId":"faq/faq"},{"type":"category","label":"Reference","items":[{"type":"link","label":"K3s Server Configuration","href":"/docs/docs/reference/server-config","docId":"reference/server-config"},{"type":"link","label":"K3s Agent Configuration","href":"/docs/docs/reference/agent-config","docId":"reference/agent-config"},{"type":"link","label":"Environment Variables","href":"/docs/docs/reference/env-variables","docId":"reference/env-variables"},{"type":"link","label":"K3s Binary Tools","href":"/docs/docs/reference/binary-tools","docId":"reference/binary-tools"},{"type":"link","label":"K3s Resource Profiling","href":"/docs/docs/reference/resource-profiling","docId":"reference/resource-profiling"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Known Issues","href":"/docs/docs/known-issues/","docId":"known-issues/known-issues"},{"type":"category","label":"Security","items":[{"type":"link","label":"Secrets Encryption","href":"/docs/docs/security/secrets-encryption","docId":"security/secrets-encryption"},{"type":"link","label":"CIS Hardening Guide","href":"/docs/docs/security/hardening-guide","docId":"security/hardening-guide"},{"type":"link","label":"CIS Self Assessment Guide","href":"/docs/docs/security/self-assessment","docId":"security/self-assessment"}],"collapsed":true,"collapsible":true,"href":"/docs/docs/security/"}]},"docs":{"advanced/advanced":{"id":"advanced/advanced","title":"Advanced Options and Configuration","description":"This section contains advanced information describing the different ways you can run and manage K3s:","sidebar":"mySidebar"},"architecture/architecture":{"id":"architecture/architecture","title":"Architecture","description":"This page describes the architecture of a high-availability K3s server cluster and how it differs from a single-node server cluster.","sidebar":"mySidebar"},"backup-restore/backup-restore":{"id":"backup-restore/backup-restore","title":"Backup and Restore","description":"The way K3s is backed up and restored depends on which type of datastore is used.","sidebar":"mySidebar"},"cluster-access/cluster-access":{"id":"cluster-access/cluster-access","title":"Cluster Access","description":"The kubeconfig file stored at /etc/rancher/k3s/k3s.yaml is used to configure access to the Kubernetes cluster. If you have installed upstream Kubernetes command line tools such as kubectl or helm you will need to configure them with the correct kubeconfig path. This can be done by either exporting the KUBECONFIG environment variable or by invoking the --kubeconfig command line flag. Refer to the examples below for details.","sidebar":"mySidebar"},"faq/faq":{"id":"faq/faq","title":"FAQ","description":"The FAQ is updated periodically and designed to answer the questions our users most frequently ask about K3s.","sidebar":"mySidebar"},"helm/helm":{"id":"helm/helm","title":"Helm","description":"Helm is the package management tool of choice for Kubernetes. Helm charts provide templating syntax for Kubernetes YAML manifest documents. With Helm we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at https://helm.sh/docs/intro/quickstart/.","sidebar":"mySidebar"},"installation/airgap":{"id":"installation/airgap","title":"Air-Gap Install","description":"You can install K3s in an air-gapped environment using two different methods. An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a private registry and mirror docker.io, or you can manually deploy images such as for small clusters.","sidebar":"mySidebar"},"installation/configuration":{"id":"installation/configuration","title":"Configuration Options","description":"This page focuses on the options that can be used when you set up K3s for the first time:","sidebar":"mySidebar"},"installation/datastore":{"id":"installation/datastore","title":"Cluster Datastore Options","description":"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available datastore options allow you to select a datastore that best fits your use case. For example:","sidebar":"mySidebar"},"installation/disable-flags":{"id":"installation/disable-flags","title":"Disable Components Flags","description":"Starting the K3s server with --cluster-init will run all control plane components, including the api server, controller manager, scheduler, and etcd. However, you can run server nodes with certain components and exclude others; the following sections will explain how to do that.","sidebar":"mySidebar"},"installation/ha":{"id":"installation/ha","title":"High Availability with an External DB","description":"Note: Official support for installing Rancher on a Kubernetes cluster was introduced in our v1.0.0 release.","sidebar":"mySidebar"},"installation/ha-embedded":{"id":"installation/ha-embedded","title":"High Availability with Embedded DB","description":"Notice:","sidebar":"mySidebar"},"installation/installation":{"id":"installation/installation","title":"Installation","description":"This section contains instructions for installing K3s in various environments. Please ensure you have met the Requirements before you begin installing K3s.","sidebar":"mySidebar"},"installation/kube-dashboard":{"id":"installation/kube-dashboard","title":"Kubernetes Dashboard","description":"This installation guide will help you to deploy and configure the Kubernetes Dashboard on K3s.","sidebar":"mySidebar"},"installation/network-options":{"id":"installation/network-options","title":"Network Options","description":"Note: Please reference the Networking page for information about CoreDNS, Traefik, and the Service LB.","sidebar":"mySidebar"},"installation/private-registry":{"id":"installation/private-registry","title":"Private Registry Configuration","description":"Containerd can be configured to connect to private registries and use them to pull private images on the node.","sidebar":"mySidebar"},"installation/requirements":{"id":"installation/requirements","title":"Requirements","description":"K3s is very lightweight, but has some minimum requirements as outlined below.","sidebar":"mySidebar"},"installation/uninstall":{"id":"installation/uninstall","title":"Uninstalling K3s","description":"If you installed K3s using the installation script, a script to uninstall K3s was generated during installation.","sidebar":"mySidebar"},"introduction":{"id":"introduction","title":"K3s - Lightweight Kubernetes","description":"Lightweight Kubernetes. Easy to install, half the memory, all in a binary of less than 100 MB.","sidebar":"mySidebar"},"known-issues/known-issues":{"id":"known-issues/known-issues","title":"Known Issues","description":"The Known Issues are updated periodically and designed to inform you about any issues that may not be immediately addressed in the next upcoming release.","sidebar":"mySidebar"},"networking/networking":{"id":"networking/networking","title":"Networking","description":"This page explains how CoreDNS, the Traefik Ingress controller, and Klipper service load balancer work within K3s.","sidebar":"mySidebar"},"quick-start/quick-start":{"id":"quick-start/quick-start","title":"Quick-Start Guide","description":"This guide will help you quickly launch a cluster with default options. The installation section covers in greater detail how K3s can be set up.","sidebar":"mySidebar"},"reference/agent-config":{"id":"reference/agent-config","title":"K3s Agent Configuration","description":"In this section, you\'ll learn how to configure the K3s agent.","sidebar":"mySidebar"},"reference/binary-tools":{"id":"reference/binary-tools","title":"K3s Binary Tools","description":"The K3s binary contains a number of additional tools the help you manage your cluster.","sidebar":"mySidebar"},"reference/env-variables":{"id":"reference/env-variables","title":"Environment Variables","description":"As mentioned in the Quick-Start Guide, you can use the installation script available at https://get.k3s.io to install K3s as a service on systemd and openrc based systems.","sidebar":"mySidebar"},"reference/resource-profiling":{"id":"reference/resource-profiling","title":"K3s Resource Profiling","description":"This section captures the results of tests to determine minimum resource requirements for K3s.","sidebar":"mySidebar"},"reference/server-config":{"id":"reference/server-config","title":"K3s Server Configuration","description":"In this section, you\'ll learn how to configure the K3s server.","sidebar":"mySidebar"},"security/hardening-guide":{"id":"security/hardening-guide","title":"CIS Hardening Guide","description":"This document provides prescriptive guidance for hardening a production installation of K3s. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Internet Security (CIS).","sidebar":"mySidebar"},"security/secrets-encryption":{"id":"security/secrets-encryption","title":"Secrets Encryption","description":"K3s supports enabling secrets encryption at rest by passing the flag --secrets-encryption on a server; this flag will do the following automatically:","sidebar":"mySidebar"},"security/security":{"id":"security/security","title":"Security","description":"This section describes the methodology and means of securing a K3s cluster. It\'s broken into 2 sections. These guides assume k3s is running with embedded etcd.","sidebar":"mySidebar"},"security/self-assessment":{"id":"security/self-assessment","title":"CIS Self Assessment Guide","description":"CIS Kubernetes Benchmark v1.6 - K3s with Kubernetes v1.17 to v1.21","sidebar":"mySidebar"},"storage/storage":{"id":"storage/storage","title":"Volumes and Storage","description":"When deploying an application that needs to retain data, you\u2019ll need to create persistent storage. Persistent storage allows you to store application data external from the pod running your application. This storage practice allows you to maintain application data, even if the application\u2019s pod fails.","sidebar":"mySidebar"},"upgrades/automated":{"id":"upgrades/automated","title":"Automated Upgrades","description":"Overview","sidebar":"mySidebar"},"upgrades/killall":{"id":"upgrades/killall","title":"Stopping K3s","description":"To allow high availability during upgrades, the K3s containers continue running when the K3s service is stopped.","sidebar":"mySidebar"},"upgrades/manual":{"id":"upgrades/manual","title":"Manual Upgrades","description":"You can upgrade K3s by using the installation script, or by manually installing the binary of the desired version.","sidebar":"mySidebar"},"upgrades/upgrades":{"id":"upgrades/upgrades","title":"Upgrades","description":"Upgrading your K3s cluster","sidebar":"mySidebar"}}}')}}]);