# Login to Azure
Connect-AzAccount

# Set your subscription
Set-AzContext -SubscriptionId 'your-subscription-id'

# Create a resource group
New-AzResourceGroup -Name 'MyResourceGroup' -Location 'West Europe'

# Create a storage account
New-AzStorageAccount -ResourceGroupName 'MyResourceGroup' -Name 'MyStorageAccount' -Location 'West Europe' -SkuName 'Standard_LRS' -Kind 'StorageV2'